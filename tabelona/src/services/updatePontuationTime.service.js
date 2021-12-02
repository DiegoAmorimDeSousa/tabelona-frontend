import api from './api';

export const updatePontuationTimes = async (name, result, pontuation, games) => {

    const getTimes = await api.put('api/times/update-pontuation', {name, result, pontuation, games})
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err;
    });

    return getTimes;
}