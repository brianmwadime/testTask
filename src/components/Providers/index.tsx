import React, { FC, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { ToastProvider } from 'react-toast-notifications';
import { SWRConfig } from 'swr';

import Layout from '@components/Layout';
import CustomToast from '@components/CustomToast';

import AuthorizationContext from '@contexts/AuthorizationContext';
import ModalsContext from '@contexts/ModalsContext';
import ChainContext from '@contexts/ChainContext';

import theme from '../../theme';
import Web3ContextProvider from '@contexts/Web3Context';


interface Props {
  children: ReactNode
}

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 1000;
  return library;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 300000,
        revalidateOnFocus: false,
      }}
    >
      <ToastProvider components={{ Toast: CustomToast }} autoDismiss autoDismissTimeout={10000}>
        <ChainContext>
          <Web3ReactProvider getLibrary={getLibrary}>
            <ThemeProvider theme={theme}>
              <Web3ContextProvider>
                <AuthorizationContext>
                  <ModalsContext>
                    <Layout>
                      {children}
                    </Layout>
                  </ModalsContext>
                </AuthorizationContext>
              </Web3ContextProvider>
            </ThemeProvider>
          </Web3ReactProvider>
        </ChainContext>
      </ToastProvider>
    </SWRConfig>
  );
};

export default Providers;
