import { getTimesService } from '../../services/getTimes.service';

export function getTimes () {
  
    return {
        type: 'GET_TIMES',
        payload: getTimesService()
    }
}