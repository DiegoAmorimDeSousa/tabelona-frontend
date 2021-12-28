import api from './api';

export const getTimesService = async (dateYear) => {

    const getTimes = await api.get('api/times/' + dateYear)
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err;
    });

    return getTimes;
}