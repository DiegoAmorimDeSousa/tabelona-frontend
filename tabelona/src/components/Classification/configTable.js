function headerTable(type) {
    if(type === 'headerTableChampions'){
        return [ '#', 'Time', 'Ano'];
    } else {
        return [ '#', 'Time', 'P', 'J', 'V', 'Resultados' ];
    }
}

function typeClassification(times, status, typeHeader) {

    const filterArrayTimes = [];
    const timeArray = [];

    times.forEach(element => {
        if(element.country === status.country){
            if(element.seriesType === status.seriesType){
                filterArrayTimes.push(element);
            }
        }
    });

    filterArrayTimes.forEach(item => {
        item.classification.forEach(option => {
            if(option.year === 2021){
                timeArray.push({
                    name: item.name,
                    logo: item.logo,
                    seriesType: item.seriesType,
                    pontuation: option.pontuation,
                    games: option.games,
                    wins: option.wins,
                })
            }
        })
    });

    timeArray.sort(function (a, b) {
        if (a.pontuation > b.pontuation || a.games < a.gmes || a.wins > b.wins) {
            return -1;
        }
    })

    return timeArray.sort();
}

function selectLastUpdate(times) {

    const arrayLastUpdate = [];

    times.forEach(element => {
        arrayLastUpdate.push(element.updatedAt);
    });

    arrayLastUpdate.sort(function (a, b) {
        if (a.pontuation > b.pontuation) {
            return -1;
        }
    });

    let formatDate = 'Nenhuma data localizada';

    if(arrayLastUpdate[0] !== undefined){
        const splitDate = arrayLastUpdate[0].split('T')[0].split('-');

        formatDate = splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0]
    } 

    return formatDate;
}

export { headerTable, typeClassification, selectLastUpdate }