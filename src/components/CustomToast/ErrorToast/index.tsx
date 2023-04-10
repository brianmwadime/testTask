import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import ErrorIcon from '@mui/icons-material/Error';




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

interface Props {
  children: ReactNode
}


const ErrorToast:FC<Props> = ({ children }) => {
  return (
    <RowFlex>
      <div style={{ paddingRight: 16 }}>
        <ErrorIcon color='error'/>
      </div>
      <ColumnFlex>
        <StyledPopupDesc>{children}</StyledPopupDesc>
      </ColumnFlex>
    </RowFlex>
  );
};

export default ErrorToast;
