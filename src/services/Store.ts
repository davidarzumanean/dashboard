import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import RootReducer from './reducers/RootReducer';

const middleware = applyMiddleware(thunk);

const Store = createStore(RootReducer, composeWithDevTools(middleware));

export type IRootStore = ReturnType<typeof RootReducer>;

export default Store;
