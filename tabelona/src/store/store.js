import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import GetTimesReducer from './GetTimes/GetTimesReducer';
import CreateTimeReducer from './CreateTime/CreateTimeReducer';
import UpdatePontuationTimeReducer from './UpdatePontuation/UpdatePontuationReducer';

const rootReducer = combineReducers({
    times: GetTimesReducer,
    createTime: CreateTimeReducer,
    updatePontuationTime: UpdatePontuationTimeReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxPromise));

export default store;