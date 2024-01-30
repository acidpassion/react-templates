// DialogService.tsx
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  content: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ open, onClose, onConfirm, title, content }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

interface DialogServiceProps {
  open: boolean;
  title: string;
  content: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

interface DialogServiceFunctions {
  openDialog: (dialogOptions: DialogServiceProps) => void;
  closeDialog: () => void;
}

const DialogService: React.FC<DialogServiceFunctions> = ({ openDialog, closeDialog }) => {
  const [dialogProps, setDialogProps] = useState<DialogServiceProps>({
    open: false,
    title: 'Confirmation',
    content: 'Are you sure?',
  });

  useEffect(() => {
    // Cleanup function to reset dialogProps when the component unmounts
    return () => setDialogProps({} as DialogServiceProps);
  }, []);

  const openDialogFunction = (dialogOptions: DialogServiceProps) => {
    setDialogProps({
      ...dialogOptions,
      open: true,
    });
  };

  const closeDialogFunction = () => {
    setDialogProps({
      open: false,
    });
    closeDialog?.(); // Call the provided closeDialog function, if any
  };

  return (
    <ConfirmDialog
      open={dialogProps.open}
      onClose={closeDialogFunction}
      onConfirm={() => {
        dialogProps.onConfirm?.();
        closeDialogFunction();
      }}
      title={dialogProps.title}
      content={dialogProps.content}
    />
  );
};

export default DialogService;
