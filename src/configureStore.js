/**
 * Create the store with dynamic reducers
 */

import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  let composeEnhancers = compose;


  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(),
  );

  return store;
}
