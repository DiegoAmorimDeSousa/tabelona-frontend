import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

const rootReducer = combineReducers({});

const store = createStore(rootReducer, applyMiddleware(reduxPromise));

export default store;