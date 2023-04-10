import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import useWeb3 from '@hooks/useWeb3';
import useToastWithLink from '@hooks/useToastWithLink';

import { makeContract, web3SendTxWrap } from '@utils/contract.utils';

import PaymentsRegistryAbi from '@abi/PaymentsRegistry.json';
import { PaymentsRegistry } from '@abi/types';
import addresses from '@constants/addresses.constants';

const useDeposit = () => {
  const { chainId, library, account } = useWeb3();
  const [loading, setLoading] = useState(false);

  const addToastWithLink  = useToastWithLink();
  const { addToast } = useToasts();

  const deposit = async ({ depositAddress, amount }) => {
    setLoading(true);
    const contract = makeContract<PaymentsRegistry>(library, PaymentsRegistryAbi, addresses.paymentsRegistry[chainId]);

    try {
      const receipt = await web3SendTxWrap(
        contract,
        'deposit',
        [depositAddress, amount],
        { from: account }
      );
      addToastWithLink('Deposit', { appearance: 'success', chainId, hash: receipt.transactionHash });
    }
    catch (e) {
      addToast('Denied Transaction', { appearance: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return { deposit, loading };

};

export default useDeposit;
