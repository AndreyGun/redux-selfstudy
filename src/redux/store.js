import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers';

export const store = createStore(postsReducer, composeWithDevTools(applyMiddleware(thunk)) );