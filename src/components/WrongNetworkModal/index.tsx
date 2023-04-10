import React, { FC, useMemo } from 'react';

import Button from '@components/Button';

import { useAuthMethod } from '@hooks/useAuth';
import useWeb3 from '@hooks/useWeb3';

import { AVAILABLE_CHAINS_LIST, CHAIN_ID, CHAIN_INFO } from '@constants/chain.constants';
import { BUTTON_TYPES } from '@constants/style.constants';
import { WarningIcon } from '@constants/icons.constants';

import useStyles from './styles.module';



const WrongNetworkModal: FC = () => {
  const { classes } = useStyles();
  const { changeChain } = useWeb3();
  const { logOut } = useAuthMethod();

  const availableChains = useMemo(() => (
    AVAILABLE_CHAINS_LIST.map(item => CHAIN_INFO[item].name)
  ),[]);

  const handleChange = async () => {
    await changeChain(CHAIN_ID.BSC);
  };

  return (
    <div className={classes.modalWrap}>
      <div className={classes.modalBackdrop} />
      <div className={classes.container}>
        <div className={classes.modal}>
          <div className={classes.card}>
            <div className={classes.content}>
              <div className={classes.title}>Check your network</div>
              <div className={classes.text}>Currently this page only supported in {availableChains.join(', ')}</div>
              <div className={classes.warningWrap}>
                {WarningIcon}  Please switch your network to continue
              </div>
              <div className={classes.buttonWrap}>
                <Button
                  onClick={handleChange}
                  type={BUTTON_TYPES.SECONDARY}
                  className={classes.button}
                >
                  Switch network in wallet
                </Button>
                <Button
                  onClick={logOut}
                  type={BUTTON_TYPES.SECONDARY3}
                  className={classes.button}
                >
                  Disconnect Wallet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrongNetworkModal;
