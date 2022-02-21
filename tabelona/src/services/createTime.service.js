import api from './api';

export const createTimeService = async (name, logo, country) => {

    const time = {
        name, logo, country
    }

    const createTime = await api.post('/api/times/create', {time: time})
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err;
    });

    return createTime;
}