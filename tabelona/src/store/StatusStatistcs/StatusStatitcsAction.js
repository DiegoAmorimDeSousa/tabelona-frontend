import { updateStatusTimeService } from '../../services/updateStatusTime.service';

export function updateStatusStatistcsAction (time) {
    return {
        type: 'UPDATE_STATUS_STATISTCS',
        payload: updateStatusTimeService(time)
    }
}