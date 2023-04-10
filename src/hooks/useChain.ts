import { useContext } from 'react';

import { ChainContext } from '@contexts/ChainContext';

export const useChain = () => useContext(ChainContext);
