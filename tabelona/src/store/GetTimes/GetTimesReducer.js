export default function (state = {
    success: false, message: 'Sem times', times: []
}, action) {

    switch (action.type) {
        case 'GET_TIMES':
            return action.payload;
        default:
            return state;
    }
}