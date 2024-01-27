// components/UserList/UserList.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, DataGrid, GridColDef } from '@material-ui/data-grid';
import { RootState } from '../../redux/store';
import { selectUser, User } from '../../redux/actions/userActions';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
];

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  const handleRowClick = (params: { data: User }) => {
    dispatch(selectUser(params.data));
  };

  return (
    <div>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        autoHeight
        onRowClick={handleRowClick}
      />
      <Button onClick={() => dispatch(selectUser(null))}>Create New User</Button>
    </div>
  );
};

export default UserList;
