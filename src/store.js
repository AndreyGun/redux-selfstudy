import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import updatePosts from './store/reducers/post-list';

export const store = createStore(updatePosts, composeWithDevTools(applyMiddleware(thunk)) );