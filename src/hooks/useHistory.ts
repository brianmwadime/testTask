import { useEffect, useState } from 'react';
import BigNumber from 'bignumber.js';

import useWeb3 from '@hooks/useWeb3';

import { makeContract } from '@utils/contract.utils';
import { isAddressesEqual } from '@utils/tokens.utils';
import { toBN } from '@utils/formaters.utils';

import { PaymentsRegistry } from '@abi/types';
import PaymentsRegistryAbi from '@abi/PaymentsRegistry.json';

import { Token } from '../types';

import { AVAILABLE_CHAINS_LIST } from '@constants/chain.constants';
import { AVAILABLE_DEPOSIT_TOKENS } from '@constants/tokens.constants';
import addresses from '@constants/addresses.constants';


interface State {
  amount: BigNumber
  chainId: number
  timestamp: number
  token: Token
}


const useHistory = () => {
  const [depositorList, setDepositorList ] = useState<State[]>([]);
  const { libraryByChainId, account } = useWeb3();

  const getHistory = async () => (
    Promise.all(AVAILABLE_CHAINS_LIST.map(async (item) => {
      const contract = makeContract<PaymentsRegistry>(libraryByChainId(Number(item)), PaymentsRegistryAbi, addresses.paymentsRegistry[item]);
      const depositorCount  = await contract.methods.depositorPaymentsCount(account).call();

      const depositorPaymentsList = await contract.methods.depositorPaymentsList(account, 0, depositorCount).call();

      return depositorPaymentsList.map(depositor => ({
        chainId: item,
        timestamp: Number(depositor[0]) * 1000,
        token: AVAILABLE_DEPOSIT_TOKENS[item].find(token => isAddressesEqual(token.address, depositor[1])),
        amount: toBN(depositor[2]),
      }));
    }))
  );

  useEffect(() => {
    (async () => {
      const historyListResponse  = await getHistory();

      const historyListResponseFlat = historyListResponse.flat();

      const historyListSort = historyListResponseFlat.sort((a, b) => Number(b.timestamp) - Number(a.timestamp));
      setDepositorList(historyListSort);
    })();
  },[]);

  return depositorList;
};

export default useHistory;
