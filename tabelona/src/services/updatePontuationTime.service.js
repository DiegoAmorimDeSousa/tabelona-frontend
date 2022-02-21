import api from './api';

export const updatePontuationTimes = async (time, result) => {
    const updatePontuationTime = await api.put('api/times/update-pontuation', {
        name: time.name,
        result: result,
    })
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err;
    });

    return updatePontuationTime;
}