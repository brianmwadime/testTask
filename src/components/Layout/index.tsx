import React, { FC, ReactNode } from 'react';

import Header from './Header';

import useStyles from './styles.module';

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <>
      <Header/>
      <div className={classes.container}>
        {children}
      </div>
    </>
  );
};

export default Layout;
