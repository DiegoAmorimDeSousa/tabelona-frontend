import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import GetTimesReducer from './GetTimes/GetTimesReducer';
import CreateTimeReducer from './CreateTime/CreateTimeReducer';
import UpdatePontuationTimeReducer from './UpdatePontuation/UpdatePontuationReducer';
import RefreshClassificationReducer from './RefreshClassification/RefreshClassificationReducer';
import ChangeScoreReducer from './ChangeScore/ChangeScoreReducer';

import ShowMenuReducer from './ShowMenu/ShowMenuReducer';
import StatusClassificationReducer from './StatusClassification/StatusClassificationReducer';

const rootReducer = combineReducers({
    times: GetTimesReducer,
    createTime: CreateTimeReducer,
    updatePontuationTime: UpdatePontuationTimeReducer,
    refreshClassification: RefreshClassificationReducer,
    changeScore: ChangeScoreReducer,

    showMenu: ShowMenuReducer,
    statusClassification: StatusClassificationReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxPromise));

export default store;