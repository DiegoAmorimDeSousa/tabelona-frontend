export default function (state = 'Fase Inicial', action) {
    switch (action.type) {
        case 'STATUS_PLAY_OFF':
            return action.payload;
        default:
            return state;
    }
}