export default function (state = 'Copa do Brasil', action) {
    switch (action.type) {
        case 'CHANGE_SCORE_PLAY_OFF':
            return action.payload;
        default:
            return state;
    }
}