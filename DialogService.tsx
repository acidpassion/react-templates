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

const DialogService: React.FC<DialogServiceProps> = ({ open, title, content, onConfirm, onClose }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    // Set the internal state when the prop 'open' changes
    setDialogOpen(open);
  }, [open]);

  const closeDialog = () => {
    setDialogOpen(false);
    onClose?.();
  };

  return (
    <ConfirmDialog
      open={dialogOpen}
      onClose={closeDialog}
      onConfirm={() => {
        onConfirm?.();
        closeDialog();
      }}
      title={title}
      content={content}
    />
  );
};

export default DialogService;
