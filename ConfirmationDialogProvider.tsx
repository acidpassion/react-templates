// hooks/ConfirmationDialogProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import ConfirmationDialog from '../components/ConfirmationDialog';

interface ConfirmationDialogContextProps {
  openDialog: (title: string, message: string, onConfirm: () => void) => void;
}

const ConfirmationDialogContext = createContext<ConfirmationDialogContextProps | undefined>(
  undefined
);

export const ConfirmationDialogProvider: React.FC = ({ children }) => {
  const [dialogProps, setDialogProps] = useState({
    open: false,
    title: '',
    message: '',
    onConfirm: () => {},
  });

  const openDialog = (title: string, message: string, onConfirm: () => void) => {
    setDialogProps({
      open: true,
      title,
      message,
      onConfirm,
    });
  };

  const closeDialog = () => {
    setDialogProps((prevProps) => ({ ...prevProps, open: false }));
  };

  return (
    <ConfirmationDialogContext.Provider value={{ openDialog }}>
      {children}
      <ConfirmationDialog {...dialogProps} onClose={closeDialog} />
    </ConfirmationDialogContext.Provider>
  );
};

export const useConfirmationDialog = () => {
  const context = useContext(ConfirmationDialogContext);
  if (!context) {
    throw new Error('useConfirmationDialog must be used within a ConfirmationDialogProvider');
  }
  return context;
};
