import React, { FC, useContext } from 'react';
import Button from '@mui/material/Button';

import Modal from '@components/Modal';

import { useAuthMethod } from '@hooks/useAuth';
import { ModalsContext } from '@hooks/useModal';

const metaMask: string = require('@assets/img/metamask-fox.svg').default;
const WalletConnect: string = require('@assets/img/wallet-connect.svg').default;

import useStyles from './styles.module';

const AuthModal: FC = () => {
  const { classes } = useStyles();
  const { connectMetaMask, connectWalletConnect } = useAuthMethod();
  const { onDismiss } = useContext(ModalsContext);

  return (
    <Modal title='Connect a wallet' classNameWrap={classes.container}>
      <div className={classes.column}>
        <Button
          fullWidth
          onClick={() => { connectMetaMask(); onDismiss(); }}
          style={{ justifyContent: 'start' }}
          color='secondary'
        >
          <div className={classes.connectButton}>
            <img src={metaMask} alt="" />
            <div>Metamask</div>
          </div>
        </Button>
        <Button
          fullWidth
          onClick={() => { connectWalletConnect(); onDismiss(); }}
          style={{ justifyContent: 'start' }}
          color='secondary'
        >
          <div className={classes.connectButton}>
            <img src={WalletConnect} alt="" />
            <div>WalletConnect</div>
          </div>
        </Button>
      </div>

    </Modal>
  );
};

export default AuthModal;
