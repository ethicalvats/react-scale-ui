/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import globalReducer from './reducers/index';

const rootReducer = combineReducers({
  global: globalReducer
});

export default rootReducer;
