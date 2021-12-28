import api from './api';

export const refreshClassificationTimes = async (times) => {

    const refreshClassification = await api.post('/api/times/refresh-classification', {times: times})
    .then(result => {
        return result.data
    })
    .catch(err => {
        return err;
    });

    return refreshClassification;
}