// components/UserList/UserList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import UserFormDialog from './UserFormDialog';
import { deleteUser } from '../../redux/actions/userActions';

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleAddUser}>
        Add User
      </Button>
      {/* Render your user grid here with edit and delete buttons */}
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <Button onClick={() => handleEditUser(user)}>Edit</Button>
          <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
        </div>
      ))}
      {/* User Form Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{selectedUser ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <UserFormDialog user={selectedUser} onClose={handleCloseDialog} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserList;
