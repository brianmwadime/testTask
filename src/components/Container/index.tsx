import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import useStyles from './styles.module';

interface Props {
  children: ReactNode
  className?: string
  classNameWrap?: string
  secondaryBg?: boolean
  isFullScreen?: boolean
}

const Container: FC<Props> = ({ children, className, secondaryBg, isFullScreen, classNameWrap }) => {
  const { classes } = useStyles();

  return (
    <div className={classNames(classes.mainBg, classNameWrap, { [classes.secondaryBg] : secondaryBg, [classes.fullScreen]: isFullScreen })}>
      <div className={classNames(classes.container, className)}>
        {children}
      </div>
    </div>
  );
};

Container.defaultProps = {
  className: '',
  classNameWrap: '',
  secondaryBg: false,
  isFullScreen: false,
};


export default Container;
