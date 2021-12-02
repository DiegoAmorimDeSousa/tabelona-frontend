export default function (state = [], action) {

    switch (action.type) {
        case 'UPDATE_PONTUATION_TIME':
            return action.payload;
        default:
            return state;
    }
}