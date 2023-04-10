import React, { ReactNode } from 'react';
import { useToasts, Options } from 'react-toast-notifications';

import { TRX_LINK } from '@constants/chain.constants';

const useToastWithLink = () => {
  const { addToast } = useToasts();

  return (content: ReactNode, { hash, chainId, ...options }: Options & { hash?: string, chainId?: number }) => {

    const link = <a href={`${TRX_LINK[chainId]}${hash}`} target='_blank' rel="noreferrer" style={{ cursor: 'pointer', fontWeight: 600, marginLeft: '5px', color: '#4EA8DE' }}>View</a>;

    addToast(<>{content}{link}</>, { ...options });
  };
};

export default useToastWithLink;
