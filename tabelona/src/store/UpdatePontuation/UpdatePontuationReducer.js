export default function (state = 0, action) {

    console.log(action.payload);

    switch (action.type) {
        case 'UPDATE_PONTUATION_TIME':
            return action.payload;
        default:
            return state;
    }
}