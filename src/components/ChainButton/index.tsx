import React, { FC, useMemo } from 'react';
import classNames from 'classnames';

import ChainModal from '@components/modals/ChainModal';

import { useModal } from '@hooks/useModal';
import useWeb3 from '@hooks/useWeb3';

import { CHAIN_INFO } from '@constants/chain.constants';

import useStyles from './styles.module';


interface Props {
  className?: string,
}

const ChainButton: FC<Props> = ({ className }) => {
  const { classes } = useStyles();
  const { chainId } = useWeb3();

  const [onPresentChainModal] = useModal(
    <ChainModal />
  );

  const chainInfo = useMemo(() => CHAIN_INFO[chainId], [chainId]);

  return (
    <button className={classNames(classes.button, className)} onClick={onPresentChainModal}>
      {chainId
        ? (
          <>
            <img src={chainInfo.logo} alt="" className={classes.logo} />
            <div>{chainInfo.name}</div>
          </>
        )
        : (
          <div>WRONG NETWORK</div>
        )
      }
    </button>
  );
};

export default ChainButton;
