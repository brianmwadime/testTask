import { useCallback, useContext, ReactNode, createContext, useState } from 'react';


interface ModalsContext {
  content?: ReactNode;
  isOpen?: boolean;
  onPresent: (content: ReactNode) => void;
  onDismiss: () => void;
}

export const ModalsContext = createContext<ModalsContext>({
  onPresent: () => {},
  onDismiss: () => {},
});

export const useModal = (modal: ReactNode) => {
  const { onDismiss, onPresent } = useContext(ModalsContext);

  const handlePresent = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  return [handlePresent, onDismiss];
};

export const useModalContext = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>();

  const handlePresent = useCallback(
    (modalContent: ReactNode) => {
      setContent(modalContent);
      setIsOpen(true);
    },
    [setContent, setIsOpen],
  );

  const handleDismiss = useCallback(() => {
    setContent(undefined);
    setIsOpen(false);
  }, [setContent, setIsOpen]);

  return { isOpen, content, handlePresent, handleDismiss };
};
