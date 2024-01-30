// ConfirmDialog.tsx
import React, { useState, useEffect, ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  content: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title,
  content,
  onConfirm,
  onCancel,
}) => {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onCancel();
  };

  const handleConfirm = () => {
    setOpen(false);
    onConfirm();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
