import React, { createContext, FC, ReactNode } from 'react';
import useLocalStorage from 'react-localstorage-hook';

import { CURRENT_CHAIN_ID } from '@constants/common.constants';
import { CHAIN_ID } from '@constants/chain.constants';

type ChainContextType = {
  chainInStorage: string
  setChainInStorage: (value: string) => void
}

export const ChainContext = createContext<ChainContextType | undefined>(undefined);

interface Props {
  children?: ReactNode
}

const ChainContextProvider: FC<Props> = ({ children }) => {
  const [chainInStorage, setChainInStorage] = useLocalStorage(CURRENT_CHAIN_ID, CHAIN_ID.BSC);

  return (
    <ChainContext.Provider value={{ chainInStorage, setChainInStorage }}>{children}</ChainContext.Provider>
  );
};

export default ChainContextProvider;
