import { getTimesService } from '../../services/getTimes.service';

export function getTimes (dateYear) {
  
    return {
        type: 'GET_TIMES',
        payload: getTimesService(dateYear)
    }
}