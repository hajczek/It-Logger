import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './logReducer';

export default combineReducers({
  log: logReducer,
  tech: techReducer,
});
