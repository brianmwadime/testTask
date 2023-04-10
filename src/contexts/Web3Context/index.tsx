import React, {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import cw3p from 'create-web3-provider';
import { AbstractConnector } from '@web3-react/abstract-connector';

import { Web3Provider } from '@ethersproject/providers';

import { useWeb3React } from '@web3-react/core';
import { useChain } from '@hooks/useChain';
import { AVAILABLE_CHAINS_LIST, CHAINS_RPC, CHAIN_ID } from '@constants/chain.constants';
import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
import { chainIdToHex, factoryNetworkParam } from '@utils/chain.utils';

type Web3ContextType = Web3ReactContextInterface & {
  loading: boolean;
  changeChain: (chainId: CHAIN_ID) => Promise<void>,
  chainId?: CHAIN_ID
  libraryByChainId?: (chainId: number) => any;
}

export const Web3Context = createContext<Web3ContextType>({
  loading: false,
  active: false,
  activate: async () => { },
  setError: () => { },
  deactivate: () => { },
  changeChain: async () => { },
});

interface Props {
  children: ReactNode
}

const Web3ContextProvider: FC<Props> = ({ children }) => {
  const {
    library,
    chainId,
    account,
    activate,
    deactivate,
    ...web3React
  } = useWeb3React();
  const { chainInStorage, setChainInStorage } = useChain();
  const navigate = useNavigate();

  const [state, setState] = useState({
    chainId: Number(chainInStorage),
    library
  });
  const [loading, setLoading] = useState(false);

  // timer for getting to some time for checking wallet connection
  // set default provider if no wallet connects after timeout
  const connectTimer = useRef<NodeJS.Timeout>();

  const { ethereum } = window as any;

  useEffect(() => {
    // don't do anything if smth is loading(connecting/disonnecting)
    if (loading) return;

    if (chainId) {
      if (AVAILABLE_CHAINS_LIST.includes(chainId)) {
        if (connectTimer.current) clearTimeout(connectTimer.current);
        setState({
          chainId,
          library: _.cloneDeep(library)
        });
        setChainInStorage(String(chainId));
      } else {
        navigate('/');
        setState({
          chainId: undefined,
          library: undefined,
        });
      }
    } else {
      if (connectTimer.current) clearTimeout(connectTimer.current);
      connectTimer.current = setTimeout(() => {
        // TODO redundant check?
        if (!chainId) {
          const providerLink = cw3p({ uri: CHAINS_RPC[Number(chainInStorage)] });
          const web3Provider = new Web3Provider(providerLink);
          setState({
            chainId: Number(chainInStorage),
            library: web3Provider,
          });
          setLoading(false);
        }
      }, 300);
    }
  }, [chainId, chainInStorage, loading, library]);

  const libraryByChainId = (chainId) => {
    const providerLink = cw3p({ uri: CHAINS_RPC[chainId] });
    return new Web3Provider(providerLink);
  };

  useEffect(() => {
    if (ethereum) {
      ethereum.once('chainChanged', () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 0);
      });
    }
  }, [ethereum, chainId]);

  const changeChain = useCallback(async (chainId: CHAIN_ID) => {
    if (account && ethereum) {
      setLoading(true);
      try {
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainIdToHex(chainId) }],
        });
      } catch (err: any) {
        if (err.code === 4902) {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: factoryNetworkParam(chainId)
          });
        } else {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    }
  }, [ethereum, account]);

  const activateHandler = useCallback(async (
    connector: AbstractConnector,
    onError?: (error: Error) => void,
    throwErrors?: boolean
  ) => {
    setLoading(true);
    try {
      await activate(connector, onError, throwErrors);
    } finally {
      setLoading(false);
    }
  }, [activate]);

  const deactivateHandler = useCallback(() => {
    setLoading(true);
    try {
      deactivate();
    } finally {
      setLoading(false);
    }
  }, [deactivate]);

  return (
    <Web3Context.Provider value={{
      ...web3React,
      library: state.library,
      libraryByChainId,
      chainId: state.chainId,
      loading,
      changeChain,
      activate: activateHandler,
      deactivate: deactivateHandler,
      account
    }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextProvider;

