import { updatePontuationTimes } from '../../services/updatePontuationTime.service';

export function updatePontuationTime (name, result) {
    return {
        type: 'UPDATE_PONTUATION_TIME',
        payload: updatePontuationTimes(name, result)
    }
}