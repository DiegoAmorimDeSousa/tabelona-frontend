import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import GetTimesReducer from './GetTimes/GetTimesReducer';
import CreateTimeReducer from './CreateTime/CreateTimeReducer';

const rootReducer = combineReducers({
    times: GetTimesReducer,
    createTime: CreateTimeReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxPromise));

export default store;