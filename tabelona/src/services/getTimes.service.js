import api from './api';

export const getTimesService = async () => {

    const getTimes = await api.get('api/times/')
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err;
    });

    return getTimes;
}