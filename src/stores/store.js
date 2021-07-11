import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './reducers/reducers';
import mySaga from './sagas/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function reduxStore(initialState) {
  const store = createStore(
    createRootReducer(),
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ),
  );

  // then run the saga
  sagaMiddleware.run(mySaga);
  return store;
}

export default reduxStore;
