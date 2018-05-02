import { combineReducers } from 'redux';
import appReducer from './appReducer';
import appContentReducer from './appContentReducer';

export default combineReducers({
  appReducer,
  appContentReducer
});
