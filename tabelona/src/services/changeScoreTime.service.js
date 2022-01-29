import api from './api';

export const changeScoreTimeService = async (time, score, objSwitching, torney) => {

    const changeScoreTime = await api.post('/api/times/change-score', {
        time: time,
        score: score,
        objSwitching: objSwitching,
        torney: torney
    })
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err;
    });

    return changeScoreTime;
}