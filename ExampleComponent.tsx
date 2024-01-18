// ExampleComponent.js
import React from 'react';
import useConfirmationDialog from './useConfirmationDialog'; // Adjust the path accordingly

const ExampleComponent = () => {
  const { openDialog, ConfirmDialog } = useConfirmationDialog();

  const handleDelete = () => {
    openDialog({
      title: 'Delete Confirmation',
      message: 'Are you sure you want to delete this item?',
      onConfirm: () => {
        // Handle delete logic here
        console.log('Item deleted!');
      },
    });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Item</button>
      <ConfirmDialog />
    </div>
  );
};

export default ExampleComponent;
