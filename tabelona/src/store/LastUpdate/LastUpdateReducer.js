export default function (state = 'Sem data de alteração', action) {
    switch (action.type) {
        case 'LAST_UPDATE':
            return action.payload;
        default:
            return state;
    }
}