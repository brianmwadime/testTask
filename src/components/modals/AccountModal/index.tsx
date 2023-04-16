import React, { FC, useContext } from 'react';
import Button from '@mui/material/Button';
import moment from 'moment';

import Modal from '@components/Modal';

import { useAuthMethod } from '@hooks/useAuth';
import { ModalsContext } from '@hooks/useModal';
import useHistory from '@hooks/useHistory';

import { formatBNWithCommas } from '@utils/formaters.utils';

import { CHAIN_INFO } from '@constants/chain.constants';

import useStyles from './styles.module';


const AccountModal: FC = () => {
  const { classes, cx } = useStyles();
  const { logOut } = useAuthMethod();
  const { onDismiss } = useContext(ModalsContext);

  const depositorList = useHistory();

  const handleLogOut = () => {
    logOut();
    onDismiss();
  };

  return (
    <Modal title='History'>
      <div className={classes.wrap}>
        <div className={cx(classes.grid, classes.header)}>
          <div>Date</div>
          <div>Amount</div>
          <div>Token</div>
        </div>
        <div className={classes.table}>
          {
            !!depositorList.length && depositorList.map(item => (
              <div className={classes.grid} key={item.timestamp}>
                <div>{moment(item.timestamp).format('HH:MM:SS, MM/DD/YYYY')}</div>
                <div>{formatBNWithCommas(item.amount, 2, item.token.decimals)}{'  '} {item.token.symbol}</div>
                <div>{item.token.name}</div>
              </div>
            ))
          }
        </div>
      </div>
      <Button onClick={handleLogOut} color='secondary'>Log out</Button>
    </Modal>
  );
};

export default AccountModal;

