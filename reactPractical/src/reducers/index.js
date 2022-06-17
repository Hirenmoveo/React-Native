// Wherever you build your reducers
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//Import the actions types constant we defined in our actions
import redState from './storeState';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    redState: redState,
  });

  // return store
  return createStore(rootReducer, applyMiddleware(thunk));
};
