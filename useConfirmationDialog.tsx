// useConfirmationDialog.ts
import { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

export const useConfirmationDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const showConfirmationDialog = () => {
    setDialogOpen(true);
  };

  const closeConfirmationDialog = () => {
    setDialogOpen(false);
  };

  const ConfirmationDialogWrapper = ({
    title,
    message,
    onConfirm,
    onCancel,
  }: {
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
  }) => (
    <ConfirmationDialog
      open={dialogOpen}
      title={title}
      message={message}
      onConfirm={() => {
        closeConfirmationDialog();
        onConfirm();
      }}
      onCancel={() => {
        closeConfirmationDialog();
        onCancel();
      }}
    />
  );

  return {
    showConfirmationDialog,
    closeConfirmationDialog,
    ConfirmationDialog: ConfirmationDialogWrapper,
  };
};
