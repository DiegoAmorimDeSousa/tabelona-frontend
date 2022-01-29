import { changeScoreTimeService } from '../../services/changeScoreTime.service';

export function changeScoreAction (time, score, objSwitching, torney) {
  
    return {
        type: 'CHANGE_SCORE_TIME',
        payload: changeScoreTimeService(time, score, objSwitching, torney)
    }
}