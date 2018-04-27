import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware)
  )
);
