import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { makeStyles } from 'tss-react/mui';

import { SuccessIcon } from '@constants/icons.constants';



const RowFlex = styled.div`
  display: flex;
  align-items: center;
`;

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPopupDesc = styled.span`
  font-weight: 500;
  margin-right: 10px;
  color: #ffffff;
`;

const useStyles = makeStyles()(
  () => ({
    icon: {
      '& svg': {
        width: '30px',
        height: '30px',
      }
    },
  })
);


interface Props {
  children: ReactNode
}


const SuccessToast:FC<Props> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <RowFlex>
      <div style={{ paddingRight: 16 }}>
        <div className={classes.icon}>{SuccessIcon}</div>
      </div>
      <ColumnFlex>
        <StyledPopupDesc>{children}</StyledPopupDesc>
      </ColumnFlex>
    </RowFlex>
  );
};

export default SuccessToast;
