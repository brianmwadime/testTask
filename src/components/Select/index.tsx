import React, { FC, ReactNode } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { InputLabel } from '@mui/material';
import classNames from 'classnames';

import useStyles from './styles.module';

type Props = SelectProps & {
  className?: string,
  classNameWrap?: string,
  label?: ReactNode,
  disabled?: boolean,
  items: {
    name: string,
    value: any
  }[]
}

const BasicSelect: FC<Props> = ({ className, classNameWrap, label, items, disabled, ...props }) => {
  const { classes } = useStyles();

  return (
    <div className={classNames(classes.wrap, classNameWrap)}>
      {label && <InputLabel className={classes.label}>{label}</InputLabel>}
      <Select
        className={classNames(classes.select, className)}
        IconComponent={ExpandMoreIcon}
        disabled={disabled}
        variant='standard'
        {...props}
      >
        {
          items.map(item => (
            <MenuItem
              value={item.value}
              sx={{
                backgroundColor: '#1D283A',

                '&:hover': {
                  backgroundColor: '#4EA8DE'
                }
              }}
              key={item.name}>{item.name}
            </MenuItem>
          ))
        }
      </Select>
    </div >
  );
};

export default BasicSelect;
