import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';

import useWeb3 from '@hooks/useWeb3';

import { isTokenNativeByAddress } from '@utils/tokens.utils';
import { toBN } from '@utils/formaters.utils';
import { makeContract } from '@utils/contract.utils';

import { ERC20 } from '@abi/types';
import ERC20Abi from '@abi/ERC20.json';


const useTokenBalance = (address: string, libraryByChainId?: (chainId: number) => any) => {
  const { account, library, chainId } = useWeb3();
  const [state, setState] = useState<BigNumber>(toBN(0));

  const updateBalance = async () => {
    const currentLibrary = libraryByChainId || library;
    if(account) {
      if(address) {
        if(isTokenNativeByAddress(address)) {
          const web3 = new Web3(currentLibrary.provider as any);
          const result = toBN(await web3.eth.getBalance(account));
          setState(toBN(result));
        } else {
          const contract = makeContract<ERC20>(currentLibrary, ERC20Abi, address);
          const result = toBN(await contract.methods.balanceOf(account).call());
          setState(toBN(result));
        }
      }
    } else {
      setState(toBN(0));
    }
  };

  useEffect(() => {
    if(library) {
      (async () => {
        await updateBalance();
      })();
    }
  },[address, account, chainId, library]);

  return { tokenBalance: state, updateBalance };
};

export default useTokenBalance;
