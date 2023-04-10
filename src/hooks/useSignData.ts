import { useCallback, useMemo } from 'react';
import Web3 from 'web3';

import useWeb3 from '../hooks/useWeb3';

import { prepareHashMessage } from '../utils/sign.utils';

export const useSignData = () => {
  const { account, library } = useWeb3();
  const web3 = useMemo(() => new Web3(library), [library])

  const signData = useCallback(async (dataToSign: any) => {

    const preparedHashData = prepareHashMessage(dataToSign);
    const msgHash = web3.eth.accounts.hashMessage(preparedHashData);
    const provider = web3.currentProvider;
    const signature = await (provider as any).send('personal_sign', [msgHash, account.toLowerCase()]);
    return signature;
  }, [account, library, web3]);

  return { signData };
};
