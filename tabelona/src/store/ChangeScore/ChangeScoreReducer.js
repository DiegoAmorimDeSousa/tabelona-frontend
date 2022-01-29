export default function (state = 0, action) {
    switch (action.type) {
        case 'CHANGE_SCORE_TIME':
            return action.payload;
        default:
            return state;
    }
}