import React, { FC, ReactNode, createContext, useCallback, useEffect, useRef, useState } from 'react';

import useWeb3 from '@hooks/useWeb3';
import WrongNetworkModal from '@components/WrongNetworkModal';

import { injected, walletConnectFactory } from '@constants/connectors.constants';

type AuthContextType = {
  connectMetaMask: () => void
  connectWalletConnect?: () => void
  logOut: () => void
}

export const AuthorizationContext = createContext<null | AuthContextType>(null);

interface Props {
  children: ReactNode
}

const AuthorizationContextProvider: FC<Props> = ({ children }) => {
  const { activate, deactivate, account, chainId } = useWeb3();

  const mounted = useRef(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectMetaMask = useCallback(async () => {
    try {
      await activate(injected, () => { }, true);
      localStorage.setItem('auth', 'MetaMask');
    } catch (e) {
      console.error(e);
      localStorage.removeItem('auth');
    }
  }, [activate]);

  const connectWalletConnect = useCallback(async () => {
    try {
      await activate(walletConnectFactory(chainId), () => { }, true);
      localStorage.setItem('auth', 'WalletConnect');
    } catch (e) {
      console.error(e);
      localStorage.removeItem('auth');
    }
  }, [activate, chainId]);

  const logOut = useCallback(() => {
    deactivate();
    localStorage.removeItem('auth');
    localStorage.removeItem('walletconnect');
  }, [deactivate]);

  useEffect(() => {
    if (!mounted.current) mounted.current = true;
    else if (!account) {
      localStorage.removeItem('auth');
    }
  }, [account, chainId]);

  useEffect(() => {
    (async () => {
      if (localStorage.getItem('auth') === 'MetaMask') {
        await connectMetaMask();
      }
      if (localStorage.getItem('auth') === 'WalletConnect') {
        await connectWalletConnect();
      }
      setIsWalletConnected(true);
    })();
  }, [connectMetaMask, connectWalletConnect]);

  // TODO Wallet Connect
  return (
    <AuthorizationContext.Provider value={{ connectMetaMask, logOut, connectWalletConnect }}>
      {isWalletConnected ? children : <div/>}
      {!chainId && <WrongNetworkModal />}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationContextProvider;
