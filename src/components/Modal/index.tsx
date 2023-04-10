import React, { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';

import { CloseIcon } from '@constants/icons.constants';

import { ModalsContext } from '@hooks/useModal';

import useStyles from './styles.module';


interface Props {
  title: string
  className?: string
  classNameWrap?: string
  classNameContent?: string
  classNameTitle?: string
  children?: ReactNode
}

const Modal: FC<Props> = ({ title, className, children, classNameWrap, classNameTitle, classNameContent }) => {
  const { classes } = useStyles();
  const { onDismiss } = useContext(ModalsContext);

  return (
    <div className={classNames(classes.container, classNameWrap)}>
      <div className={classes.modal}>
        <div className={classNames(classes.card, className)}>
          <div className={classNames(classes.content, classNameContent)}>
            <div className={classNames(classes.title, classNameTitle)}>
              <div className={classes.titleText}>{title}</div>
              <button className={classes.button} onClick={onDismiss}>{CloseIcon}</button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
