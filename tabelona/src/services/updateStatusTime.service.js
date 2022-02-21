import React from 'react';

export const updateStatusTimeService = async (time) => {

    let numberOfTitles = 0;
    let participaçõesSerieA = 0;
    let ultimaParticipacao = 'Nunca Jogou';

    if(time.titles.length > 0){
        numberOfTitles = time.titles.length;
    }

    await time.classification.map(element => {
        if(element.series === 'A'){
            ultimaParticipacao = element.year;
            participaçõesSerieA += 1;
        }
    })

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img style={{width: '40px'}} src={time.logo} />
                <div>{time.name}</div>
            </div>
            <div style={{margin: '20px 0 10px 0'}}>
                Títulos: {numberOfTitles}
            </div>
            <div style={{marginLeft: '20px'}}>
                {time.titles.map((title, index) => {
                    return (
                        <div key={index}>{title.name} - {title.year}</div>
                    )
                })}
            </div>
            <div style={{margin: '20px 0 10px 0'}}>
                Participações série A: {participaçõesSerieA}
            </div>
            <div style={{margin: '20px 0 10px 0'}}>
                Última vez na série A: {ultimaParticipacao}
            </div>
            <div style={{margin: '20px 0 10px 0'}}>
                <div style={{marginBottom: '10px'}}>Campanhas:</div>
                {time.classification.map((element, index) => {
                    if(element !== null) {
                        return (
                            <div key={index}>
                                <div style={{marginLeft: '20px'}}> Pontos: {element.pontuation} </div>
                                <div style={{marginLeft: '20px'}}> Jogos: {element.games} </div>
                                <div style={{marginLeft: '20px'}}> Vitórias: {element.wins} </div>
                                <div style={{marginLeft: '20px'}}> Ano: {element.year} </div>
                                <div style={{marginLeft: '20px'}}> Série: {element.series} </div>
                                <div> ---------------------- </div>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    );
}