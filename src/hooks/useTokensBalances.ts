import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';
import Web3 from 'web3';

import useWeb3 from '@hooks/useWeb3';

import { isTokenNativeByAddress } from '@utils/tokens.utils';
import { toBN } from '@utils/formaters.utils';
import { makeContract } from '@utils/contract.utils';

import { ERC20 } from '@abi/types';
import ERC20Abi from '@abi/ERC20.json';


const useTokenBalances = (addresses: string[]) => {
  const { account, library } = useWeb3();
  const [state, setState] = useState<BigNumber[]>(new Array(addresses.length).fill(toBN(0)));

  const updateBalance = async () => {
    if(account) {
      if(addresses.length) {
        const resultBalances = await Promise.all(addresses.map((async (address) => {
          if(isTokenNativeByAddress(address)) {
            const web3 = new Web3(library.provider as any);
            return toBN(await web3.eth.getBalance(account));
          } else {
            const contract = makeContract<ERC20>(library, ERC20Abi, address);
            return  toBN(await contract.methods.balanceOf(account).call());
          }
        })));
        setState(resultBalances);
      }
    } else {
      setState(new Array(addresses.length).fill(toBN(0)));
    }
  };

  useEffect(() => {
    (async () => {
      await updateBalance();
    })();
  },[addresses, account]);

  return { tokensBalances: state, updateBalance };
};

export default useTokenBalances;
