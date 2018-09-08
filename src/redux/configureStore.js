import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import sagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import requestMiddleware from 'src/redux/middlewares/requestMiddleware';
import rootReducer from './rootReducer';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware, requestMiddleware, logger, sagaMiddleware),
    )
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
