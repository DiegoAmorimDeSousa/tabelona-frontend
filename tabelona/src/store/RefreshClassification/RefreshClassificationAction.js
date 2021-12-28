import { refreshClassificationTimes } from '../../services/refreshClassification.service';

export function refreshClassificationAction (times) {
  
    return {
        type: 'REFRESH_CLASSIFICATION',
        payload: refreshClassificationTimes(times)
    }
}