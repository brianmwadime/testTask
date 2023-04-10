import React, { FC } from 'react';
import { ToastProps } from 'react-toast-notifications';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

import SuccessToast from '@components/CustomToast/SuccessToast';
import ErrorToast from '@components/CustomToast/ErrorToast';

import useStyles from './styles.module';

const Fader = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ffffff;
`;

const AnimatedFader = animated(Fader);

const CustomToast: FC<ToastProps> = ({ autoDismissTimeout, appearance, children }) => {
  const { classes } = useStyles();

  const faderStyle = useSpring({
    from: { width: '100%' },
    to: { width: '0%' },
    config: { duration: autoDismissTimeout ?? undefined },
  });

  return (
    <div className={classes.popup}>
      {appearance === 'success' && <SuccessToast>{children}</SuccessToast>}
      {appearance === 'error' && <ErrorToast>{children}</ErrorToast>}
      {autoDismissTimeout !== null ? <AnimatedFader style={faderStyle} /> : null}
    </div>
  );
};

export default CustomToast;
