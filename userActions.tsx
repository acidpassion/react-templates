// redux/actions/userActions.ts
import { Action } from 'redux';

export interface User {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
}

export interface SelectUserAction extends Action<'SELECT_USER'> {
  payload: User | null;
}

export const selectUser = (user: User | null): SelectUserAction => ({
  type: 'SELECT_USER',
  payload: user,
});
