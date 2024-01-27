// components/UserList/UserFormDialog.js
import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addUser, editUser } from '../../redux/actions/userActions';

const UserFormDialog = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState(user ? user.name : '');

  const handleSave = () => {
    const newUser = { id: user ? user.id : Date.now(), name };
    if (user) {
      dispatch(editUser(newUser));
    } else {
      dispatch(addUser(newUser));
    }
    onClose();
  };

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleSave} color="primary">
        Save
      </Button>
    </div>
  );
};

export default UserFormDialog;
