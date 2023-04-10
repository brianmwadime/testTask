import { ZERO_ADDRESS } from '@constants/chain.constants';

export function isAddressesEqual(address0: string, address1: string): boolean {
  if (!address0 || !address1) return false;
  return address0.toLowerCase() === address1.toLowerCase();
}

export const isTokenNativeByAddress = (address: string): boolean => (
  address === ZERO_ADDRESS
);

