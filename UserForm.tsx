// components/UserDetailsForm/UserDetailsForm.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { RootState } from '../../redux/store';
import { selectUser, User } from '../../redux/actions/userActions';

const UserDetailsForm: React.FC = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state: RootState) => state.user.selectedUser);
  const [userDetails, setUserDetails] = useState<User | null>(null);

  useEffect(() => {
    setUserDetails(selectedUser);
  }, [selectedUser]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!userDetails) return;
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!userDetails) return;
    // Dispatch action to save or update user details in the Redux store
    // For now, let's just log the details to the console
    console.log('Save User Details:', userDetails);
  };

  return (
    <div>
      <h2>User Details Form</h2>
      {userDetails && (
        <>
          <TextField
            name="name"
            label="Name"
            value={userDetails.name}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            label="Email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
        </>
      )}
      <Button onClick={handleSave} color="primary">
        Save
      </Button>
    </div>
  );
};

export default UserDetailsForm;
