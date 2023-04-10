import { useCallback, useEffect, useMemo, useState } from 'react';
import BigNumber from 'bignumber.js';
import { useToasts } from 'react-toast-notifications';

import useWeb3 from './useWeb3';
import useToastWithLink from '@hooks/useToastWithLink';

import { MAX_UINT256, MIN_ALLOWANCE_AMOUNT } from '@constants/tokens.constants';
import ERC20Abi from '../abi/ERC20.json';

import { toBN } from '@utils/formaters.utils';
import { makeContract, web3SendTxWrap } from '@utils/contract.utils';
import { isAddressesEqual } from '@utils/tokens.utils';

import { ERC20 } from '@abi/types';
import { ZERO_ADDRESS } from '@constants/chain.constants';


const useApprove = (spender: string, tokenAddress: string) => {
  const { account, library, chainId, libraryByChainId } = useWeb3();
  const { addToast } = useToasts();
  const addToastWithLink = useToastWithLink();

  const [allowance, setAllowance] = useState(new BigNumber(0));
  const [approveLoading, setApproveLoading] = useState(false);
  const [allowanceLoading, setAllowanceLoading] = useState(true);
  const isApproved = useMemo(() =>
    isAddressesEqual(tokenAddress, ZERO_ADDRESS)
    || toBN(MIN_ALLOWANCE_AMOUNT).lt(allowance),
    [allowance]);

  const updateAllowance = useCallback(async () => {
    const contract = makeContract(libraryByChainId(chainId), ERC20Abi, tokenAddress);
    try {
      if (isAddressesEqual(tokenAddress, ZERO_ADDRESS)) return;
      setAllowanceLoading(true);
      const _allowance = await contract.methods.allowance(account, spender).call();
      setAllowance(toBN(_allowance));
    } catch (error) {
      console.error(error);
    } finally {
      setAllowanceLoading(false);
    }
  }, [account, spender, tokenAddress]);

  const handleApprove = useCallback(async () => {
    setApproveLoading(true);
    const token = makeContract<ERC20>(library, ERC20Abi, tokenAddress);
    try {
      const tx = await web3SendTxWrap(token, 'approve', [spender, MAX_UINT256], { from: account });
      await updateAllowance();
      addToastWithLink('Approved', { appearance: 'success', chainId, hash: tx.transactionHash });
      return tx;
    } catch (error) {
      if ((error as any).message.includes('User denied transaction signature')) {
        addToast('Denied Transaction', { appearance: 'error' });
      } else {
        addToast('Transaction Failed', { appearance: 'error' });
      }
    } finally {
      setApproveLoading(false);
    }

  }, [spender, tokenAddress, account, library]);

  useEffect(() => {
    if (account && tokenAddress && spender && library) {
      (async () => {
        await updateAllowance();
      })();
    }
  }, [account, tokenAddress, spender, library]);

  return { handleApprove, allowance, approveLoading, allowanceLoading, updateAllowance, isApproved };

};

export default useApprove;
