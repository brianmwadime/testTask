import React, { FC, useContext, useMemo } from 'react';


import Modal from '@components/Modal';
import Button from '@components/Button';

import { ModalsContext } from '@hooks/useModal';
import { useChain } from '@hooks/useChain';
import useWeb3 from '@hooks/useWeb3';

import { AVAILABLE_CHAINS_LIST, CHAIN_ID, CHAIN_INFO } from '@constants/chain.constants';
import { BUTTON_TYPES } from '@constants/style.constants';

import useStyles from './styles.module';

const ChainModal: FC = () => {
  const { classes } = useStyles();
  const { changeChain, chainId } = useWeb3();

  const { setChainInStorage } = useChain();
  const { onDismiss } = useContext(ModalsContext);

  const currentChain = useMemo(() => CHAIN_INFO[chainId], [chainId]);

  const handleChange = async (chainIdLocal: CHAIN_ID) => {
    await changeChain(chainIdLocal);
    setChainInStorage(chainIdLocal.toString());
    onDismiss();
  };

  return (
    <Modal
      title="Select a network"
    >
      <div className={classes.text}>
        You are currently connected to the <span>{currentChain.walletName}</span> network.
      </div>
      <div className={classes.wrapper}>
        <div className={classes.wrap}>
          {AVAILABLE_CHAINS_LIST.map(chainId => {
            const chainInfo = CHAIN_INFO[chainId];
            return (
              <Button
                onClick={() => handleChange(chainId)}
                key={chainId}
                disabled={chainInfo.name === currentChain.name}
                type={BUTTON_TYPES.SECONDARY}
                className={classes.button}
              >
                <div className={classes.buttonContent}>
                  <img src={chainInfo.logo} alt=""/>
                  <div>{chainInfo.name}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default ChainModal;
