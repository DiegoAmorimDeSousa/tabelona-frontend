import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import GetTimesReducer from './GetTimes/GetTimesReducer';
import CreateTimeReducer from './CreateTime/CreateTimeReducer';

import RefreshClassificationReducer from './RefreshClassification/RefreshClassificationReducer';
import ChangeScoreReducer from './ChangeScore/ChangeScoreReducer';

import ShowMenuReducer from './ShowMenu/ShowMenuReducer';
import StatusClassificationReducer from './StatusClassification/StatusClassificationReducer';
import LastUpdateReducer from './LastUpdate/LastUpdateReducer';
import UpdatePontuationTimeReducer from './UpdatePontuation/UpdatePontuationReducer';
import StatusStatitcsReducer from './StatusStatistcs/StatusStatitcsReducer';
import PlayOffReducer from './ChangePlayOff/ChangePlayOffReducer';
import StatusPlayOffReducer from './StatusPlayOff/StatusPlayOffReducer';

const rootReducer = combineReducers({
    times: GetTimesReducer,
    createTime: CreateTimeReducer,
    updatePontuationTime: UpdatePontuationTimeReducer,
    refreshClassification: RefreshClassificationReducer,
    changeScore: ChangeScoreReducer,

    showMenu: ShowMenuReducer,
    statusClassification: StatusClassificationReducer,
    lastUpdate: LastUpdateReducer,
    updatePontuationTime: UpdatePontuationTimeReducer,
    statusStatistcs: StatusStatitcsReducer,
    playOff: PlayOffReducer,
    statusPlayOff: StatusPlayOffReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxPromise));

export default store;