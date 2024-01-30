// UserManagementComponent.tsx
import React, { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';

const UserManagementComponent: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDeleteClick = (userId: string) => {
    setSelectedUserId(userId);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    // Perform the delete action here using the selectedUserId
    console.log('Deleting user with ID:', selectedUserId);

    // After deleting, close the dialog
    setDeleteDialogOpen(false);
  };

  const handleCancelDelete = () => {
    // Cancel the delete action
    setDeleteDialogOpen(false);
  };

  return (
    <>
      {/* Your User Listing Table with Delete Buttons */}
      <button onClick={() => handleDeleteClick("user123")}>Delete User</button>

      {/* Reusable Confirm Dialog */}
      <ConfirmDialog
        isOpen={isDeleteDialogOpen}
        title="Confirm Delete"
        content="Are you sure you want to delete this user?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default UserManagementComponent;
