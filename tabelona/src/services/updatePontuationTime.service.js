import api from './api';

export const updatePontuationTimes = async (name, result) => {

    console.log('BATEU AQUI', name, result);

    const getTimes = await api.put('api/times/update-pontuation', {name, result})
    .then(result => {
        console.log('EIEI', result.data);
        return result.data
    })
    .catch(err => {
        console.log('OEIEI', err);
        return err;
    });

    return getTimes;
}