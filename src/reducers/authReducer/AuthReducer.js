// reducers.js
import { LOGIN, LOGOUT } from './ActionTypes';


const initialState= {
  user: null,
  token:null
};

export const AuthReducer = (state = initialState, action) => {
  console.log("action",action)
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.user,
        authToken: action.payload.token,

      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
