import { legacy_createStore as createStore, combineReducers } from 'redux';

import { AuthReducer } from './src/reducers/authReducer/AuthReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const store = createStore(rootReducer);

export default store;

