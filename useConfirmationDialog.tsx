// useConfirmationDialog.js
import React, { useState, useCallback } from 'react';
import ConfirmationDialog from './ConfirmationDialog'; // Create this component (see step 3)

const useConfirmationDialog = () => {
  const [open, setOpen] = useState(false);
  const [confirmationData, setConfirmationData] = useState({});

  const openDialog = useCallback((data) => {
    setConfirmationData(data);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  const ConfirmDialog = () => (
    <ConfirmationDialog
      open={open}
      onClose={closeDialog}
      {...confirmationData}
    />
  );

  return { openDialog, ConfirmDialog };
};

export default useConfirmationDialog;
