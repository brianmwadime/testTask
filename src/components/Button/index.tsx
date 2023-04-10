import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { BUTTON_SIZES, BUTTON_TYPES } from '@constants/style.constants';

import  useStyles  from './styles.module';

interface Props {
  className?: string,
  disabled?: boolean,
  size?: string,
  type?: string,
  onClick?: () => void,
  loader?: boolean,
  error?: string,
  children?: ReactNode
}

const Button: FC<Props> = ({ className, disabled, children, size, type, onClick, loader, error }) => {
  const { classes } = useStyles();
  return (
    <div className={className}>
      <button
        disabled={disabled || loader || !!error}
        onClick={onClick}
        className={classNames(classes.button, {
          [classes[size]]: size,
          [classes[type]]: type,
          [classes.loaderWrap]: loader,
          [classes.error]: error,
        })}
      >
        <div className={classes.text}>
          <div>{error || children}</div>
        </div>
      </button>
    </div>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false,
  size: BUTTON_SIZES.L,
  type: BUTTON_TYPES.PRIMARY,
  loader: false,
  error: '',
};

export default Button;
