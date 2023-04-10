import React, { FC, ReactNode } from 'react';
import TooltipMUI, { TooltipProps } from '@mui/material/Tooltip';
import classNames from 'classnames';

import { InfoIcon } from '@constants/icons.constants';

import useStyles from './styles.module';

type Placement = 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top'

interface Props {
  title?: any,
  isInfo?: boolean,
  children?: ReactNode,
  placement?: Placement
  className?: string,
}


const CustomWidthTooltip: FC<TooltipProps> = ({ className, ...props }) => (
  <TooltipMUI classes={{ popper: className }}  {...props}  />

);

const Tooltip: FC<Props> = ({ title, isInfo, children, placement, className, ...props }) => {
  const { classes } = useStyles();

  return (
    <CustomWidthTooltip
      title={title}
      placement={placement}
      className={classes.tooltip}
      {...props}
    >
      <div className={classNames(classes.wrap, className)} >
        {
          isInfo ? <>{children}{InfoIcon}</> : children
        }
      </div>
    </CustomWidthTooltip>
  );
};

export default Tooltip;


