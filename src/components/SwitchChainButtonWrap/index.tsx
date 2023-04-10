import React, { FC, ReactNode } from 'react';

import Button from '@components/Button';

import { useChain } from '@hooks/useChain';
import useWeb3 from '@hooks/useWeb3';

import { BUTTON_SIZES, BUTTON_TYPES } from '@constants/style.constants';

interface Props {
  size?: string,
  className?: string,
  type?: string
  chainId: number
  children: ReactNode
}

const SwitchChainButtonWrap: FC<Props> = ({ size, className, type, chainId, children }) => {

  const { changeChain, chainId: currentChainId } = useWeb3();
  const { setChainInStorage } = useChain();

  const handleChange = async () => {
    await changeChain(chainId);
    setChainInStorage(chainId.toString());
  };

  return (
    <>
      {
        currentChainId === chainId
          ? <>{children}</>
          : (
            <Button
              size={size}
              type={type}
              onClick={handleChange}
              className={className}
            >
              Switch Chain
            </Button>
          )
      }
    </>
  );
};

SwitchChainButtonWrap.defaultProps = {
  size: BUTTON_SIZES.M,
  type: BUTTON_TYPES.SECONDARY,
};

export default SwitchChainButtonWrap;
