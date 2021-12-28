export default function (state = 0, action) {
    switch (action.type) {
        case 'REFRESH_CLASSIFICATION':
            return action.payload;
        default:
            return state;
    }
}