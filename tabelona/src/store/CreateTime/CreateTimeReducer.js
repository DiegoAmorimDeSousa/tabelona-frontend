export default function (state = [], action) {
    switch (action.type) {
        case 'CREATE_TIME':
            return action.payload;
        default:
            return state;
    }
}