// pages/index.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { Container, Grid, Paper } from '@material-ui/core';
import UserList from '../components/UserList/UserList';
import UserDetailsForm from '../components/UserDetailsForm/UserDetailsForm';
import store from '../redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <h1>User Management System</h1>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <UserList />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <UserDetailsForm />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
};

export default App;
