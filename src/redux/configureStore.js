import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import requestMiddleware from 'src/redux/middlewares/requestMiddleware';
import rootReducer from './rootReducer';

const configureStore = (initialState) => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, requestMiddleware, logger),
  )
);

export default configureStore;
