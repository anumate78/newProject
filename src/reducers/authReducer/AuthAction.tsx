// actions.ts
import { LOGIN, LOGOUT } from './ActionTypes';

interface User {
  name: string;
  token:string
}

export const login = (user: string,token:string) => ({
  type: LOGIN as typeof LOGIN,
  payload: {user,token},
});

export const logout = () => ({
  type: LOGOUT as typeof LOGOUT,
});
