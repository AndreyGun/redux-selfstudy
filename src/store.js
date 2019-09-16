import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import updatePosts from './store/reducers';

export const store = createStore(updatePosts, composeWithDevTools(applyMiddleware(thunk)) );