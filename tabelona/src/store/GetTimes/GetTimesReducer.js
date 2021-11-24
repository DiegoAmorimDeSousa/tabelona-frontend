export default function (state = [], action) {
    switch (action.type) {
        case 'GET_TIMES':
            return action.payload;
        default:
            return state;
    }
}