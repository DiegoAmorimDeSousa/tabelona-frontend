import { createTimeService } from '../../services/createTime.service';

export function createTime (time) {
  
    return {
        type: 'CREATE_TIME',
        payload: createTimeService(time)
    }
}