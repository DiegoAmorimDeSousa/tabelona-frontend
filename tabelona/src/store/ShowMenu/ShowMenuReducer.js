export default function (state = 'Home', action) {
    switch (action.type) {
        case 'SHOW_MENU':
            return action.payload;
        default:
            return state;
    }
}