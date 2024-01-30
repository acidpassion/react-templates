// YourComponent.tsx
import React from 'react';
import DialogService from './DialogService';

const YourComponent: React.FC = () => {
  const handleDelete = (userId: number) => {
    // Call the dialog service to confirm the deletion
    DialogService.openDialog({
      open: true,
      title: 'Delete User',
      content: `Are you sure you want to delete user with ID ${userId}?`,
      onConfirm: () => {
        // Logic to delete the user
        console.log(`Deleting user with ID ${userId}`);
      },
      onClose: DialogService.closeDialog, // Close the dialog on cancel
    });
  };

  return (
    <div>
      {/* Your user listing table */}
      <table>
        {/* Render your user rows here */}
        <tr>
          <td>User 1</td>
          <td>
            <button onClick={() => handleDelete(1)}>Delete</button>
          </td>
        </tr>
        {/* Add more user rows as needed */}
      </table>

      {/* Include the DialogService component in your component */}
      <DialogService openDialog={(options) => DialogService.openDialog(options)} closeDialog={DialogService.closeDialog} />
    </div>
  );
};

export default YourComponent;
