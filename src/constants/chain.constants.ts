import { toBN } from '@utils/formaters.utils';

const binance: string = require('@assets/chains/bnb.svg').default;
const canto: string = require('@assets/chains/canto.svg').default;
const fantom: string = require('@assets/chains/fantom.svg').default;
const cronos: string = require('@assets/chains/cronos.svg').default;
const optimism: string = require('@assets/chains/optimism.svg').default;
const arbitrum: string = require('@assets/chains/arbitrum.svg').default;
const avalanche: string = require('@assets/chains/avalanche.svg').default;
const polygon: string = require('@assets/chains/polygon.svg').default;
const ethereum: string = require('@assets/chains/ethereum.svg').default;

import { ChainInfo, ChainMapped } from '../types';

export enum CHAIN_ID {
  BSC = 56,
}

export const AVAILABLE_CHAINS_LIST = [
  CHAIN_ID.BSC,

];

// TODO add array of rpcs?
export const CHAINS_RPC = {
  [CHAIN_ID.BSC]: 'https://bsc-dataseed.binance.org/',
};

export const CHAIN_INFO: ChainMapped<ChainInfo> = {
  [CHAIN_ID.BSC]: {
    logo: binance,
    name: 'BNB CHAIN',
    walletName: 'Binance Smart Chain',
    blockExplorerUrl: 'https://etherscan.io/',
  },
};

export const TRX_LINK = {
  [CHAIN_ID.BSC]: 'https://bscscan.com/tx/',
};

export const GAS_MULTIPLIER = 1.15;
export const SLIPPAGE_PARAM = toBN(0.997);
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
