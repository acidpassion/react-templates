// useConfirmationDialog.js
import React, { useState, useCallback, useContext, createContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';

// Create a context to be used by components
const ConfirmationDialogContext = createContext();

export const useConfirmationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmationText, setConfirmationText] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});

  const openDialog = useCallback((text, onConfirmCallback) => {
    setConfirmationText(text);
    setOnConfirm(() => onConfirmCallback);
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  const ConfirmDialog = () => (
    <Dialog open={isOpen} onClose={closeDialog}>
      <DialogContent>
        <DialogContentText>{confirmationText}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={() => { onConfirm(); closeDialog(); }} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );

  return {
    openDialog,
    ConfirmationDialog,
  };
};

// Create a context provider to wrap your entire app
export const ConfirmationDialogProvider = ({ children }) => {
  const confirmationDialog = useConfirmationDialog();

  return (
    <ConfirmationDialogContext.Provider value={confirmationDialog}>
      {children}
      <confirmationDialog.ConfirmationDialog />
    </ConfirmationDialogContext.Provider>
  );
};

// Custom hook to easily access the confirmation dialog functions in components
export const useConfirmationDialogContext = () => {
  const context = useContext(ConfirmationDialogContext);
  if (!context) {
    throw new Error('useConfirmationDialogContext must be used within a ConfirmationDialogProvider');
  }
  return context;
};
