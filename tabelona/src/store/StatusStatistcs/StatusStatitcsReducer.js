export default function (state = 
`Clique em algum time para ver suas estatísticas`, action) {
    switch (action.type) {
        case 'UPDATE_STATUS_STATISTCS':
            return action.payload;
        default:
            return state;
    }
}