import React, { FC } from 'react';
import Button from '@components/Button';
import AuthModal from '@components/modals/AuthModal';

import { useModal } from '@hooks/useModal';

import { BUTTON_SIZES, BUTTON_TYPES } from '@constants/style.constants';


interface Props {
  size?: string,
  className?: string,
  type?: string
  handleChange?: () => void
}

const ConnectWalletButton: FC<Props> = ({ size, className, type, handleChange }) => {
  const [onPresentAuthModal] = useModal(
    <AuthModal />
  );

  const handleConnect = () => {
    onPresentAuthModal();
    handleChange && handleChange();
  };

  return (
    <Button
      size={size}
      type={type}
      onClick={handleConnect}
      className={className}
    >
      Connect wallet
    </Button>
  );
};

ConnectWalletButton.defaultProps = {
  size: BUTTON_SIZES.M,
  type: BUTTON_TYPES.PRIMARY,
};

export default ConnectWalletButton;
