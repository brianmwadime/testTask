import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { CHAINS_RPC, CHAIN_ID } from './chain.constants';

export const injected = new InjectedConnector({});

// TODO make different chains
export const walletConnectFactory = (chainId: CHAIN_ID) => new WalletConnectConnector({
  rpc: CHAINS_RPC,
  chainId,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
});