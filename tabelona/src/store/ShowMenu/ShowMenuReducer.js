export default function (state = 'Chaveamentos', action) {
    switch (action.type) {
        case 'SHOW_MENU':
            return action.payload;
        default:
            return state;
    }
}