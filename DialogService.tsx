// DialogService.js
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const ConfirmDialog = ({ open, onClose, onConfirm, title, content }) => {
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

const DialogService = () => {
  const [dialogProps, setDialogProps] = useState({
    open: false,
    title: 'Confirmation',
    content: 'Are you sure?',
    onConfirm: () => {},
    onClose: () => {},
  });

  useEffect(() => {
    // Cleanup function to reset dialogProps when the component unmounts
    return () => setDialogProps({});
  }, []);

  const openDialog = (dialogOptions) => {
    setDialogProps({
      ...dialogOptions,
      open: true,
    });
  };

  const closeDialog = () => {
    setDialogProps({
      open: false,
    });
  };

  return (
    <ConfirmDialog
      open={dialogProps.open}
      onClose={closeDialog}
      onConfirm={() => {
        dialogProps.onConfirm();
        closeDialog();
      }}
      title={dialogProps.title}
      content={dialogProps.content}
    />
  );
};

export default DialogService;
