import { compose } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import _ from 'lodash';
import rootReducer from '../reducers/rootReducer';

import { loadState, saveState } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = [thunk, logger];
const middlewares = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  enhancer: composeEnhancers(applyMiddleware(...middlewares)),
  preloadedState: loadState(),
});
// const store = createStore(npm start
//   rootReducer,
//   persistedState,
//   composeEnhancers(applyMiddleware(...middlewares))
// );

store.subscribe(_.throttle(() => saveState(store.getState()), 1000));

export default store;
