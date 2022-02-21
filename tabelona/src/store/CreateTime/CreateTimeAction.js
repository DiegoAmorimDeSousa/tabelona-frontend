import { createTimeService } from '../../services/createTime.service';

export function createTime (name, logo, country) {
  
    return {
        type: 'CREATE_TIME',
        payload: createTimeService(name, logo, country)
    }
}