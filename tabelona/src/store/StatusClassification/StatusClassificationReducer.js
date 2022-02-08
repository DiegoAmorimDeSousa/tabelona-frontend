export default function (state = {
    country: 'Brasil',
    seriesType: 'A',
    year: 2021
}, action) {
    switch (action.type) {
        case 'STATUS_CLASSIFICATION':
            return action.payload;
        default:
            return state;
    }
}