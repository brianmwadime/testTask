import React, { FC, isValidElement, cloneElement, ReactNode } from 'react';

import { ModalsContext, useModalContext } from '@hooks/useModal';

import useStyles from './styles.module';

interface Props {
  children: ReactNode
}

const ModalsWrap: FC<Props> = ({ children }) => {
  const { isOpen, content, handlePresent, handleDismiss } = useModalContext();
  const { classes } = useStyles();

  return (
    <ModalsContext.Provider
      value={{
        content,
        isOpen,
        onPresent: handlePresent,
        onDismiss: handleDismiss,
      }}
    >
      {children}
      {isOpen && (
        <div className={classes.modalWrap}>
          <div onClick={handleDismiss} className={classes.modalBackdrop}/>
          {isValidElement(content) &&
          cloneElement(content)}
        </div>
      )}
    </ModalsContext.Provider>
  );
};

export default ModalsWrap;
