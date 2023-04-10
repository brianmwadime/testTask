import Web3 from 'web3';

import { BaseContract, EstimateGasOptions } from '../abi/types/types';

import { GAS_MULTIPLIER } from '@constants/chain.constants';

import { PropType } from '../types';
import { TransactionReceipt } from '../web3.types';

import { toBN } from './formaters.utils';

export async function web3SendTxWrap<C extends BaseContract, M extends keyof PropType<C, 'methods'>>(
  contract: C, methodName: M, params: any[], options: EstimateGasOptions
): Promise<TransactionReceipt> {
  const gas = await contract.methods[methodName](...params).estimateGas({ ...options });
  const adjustedGas = toBN(gas).times(GAS_MULTIPLIER).toFixed(0);
  return new Promise((res, rej) => {
    contract.methods[methodName](...params)
      .send({ ...options, gas: adjustedGas })
      .once('receipt', async (receipt: TransactionReceipt) => {
        return res(receipt);
      })
      .on('error', (error) => {
        return rej(error);
      });
  });
}

export const makeContract = <T = any>(library: any, abi: any, address: string): T => {
  const web3 = new Web3(library.provider);
  return new web3.eth.Contract(abi, address) as unknown as T;
};

