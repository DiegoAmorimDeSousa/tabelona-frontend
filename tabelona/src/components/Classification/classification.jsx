import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './classification.css';

import CreateTime from '../../components/CreateTime/createTime';

import { getTimes } from '../../store/GetTimes/GetTimesAction';
import { updatePontuationTime } from '../../store/UpdatePontuation/UpdatePontuationAction';

function Classification() {

    const dispatch = useDispatch();

    const times = useSelector(state => state.times);

    const timesUpdate = useSelector(state => state.updatePontuationTime);

    const [updatePontuation, setUpdatePontuationTime] = useState(false);
    const [timesArray, setTimesArray] = useState([]);
    const [name, setName] = useState('');
    const [result, setResult] = useState('');
    const [pontuation, setPontuation] = useState('');
    const [games, setGames] = useState('');
    const [lastUpdate, setLastUpdate] = useState('Procurando data');
    const [arrayYearTorney, setArrayYearTorney] = useState([]);
    const [valueSelect, setValueSelect] = useState('');
    const [valueSelectBoolean, setValueSelectBoolean] = useState(true);

    useEffect(() => {

        const dateYear = new Date().getFullYear();

        setValueSelect(dateYear);

        if(valueSelectBoolean){
            dispatch(getTimes(dateYear));
        } 

        if(updatePontuation){

            dispatch(updatePontuationTime(name, result, pontuation, games));

            if(timesUpdate.times !== undefined){

                dispatch(updatePontuationTime('name', 'result', 'pontuation', 'games'));

                setTimesArray(timesUpdate.times);

                setTimeout(() => {
                    document.getElementById(name + result).checked = false;
                    setUpdatePontuationTime(false);
                    setName('');
                    setResult('');
                    setPontuation('');
                    setGames('');
                }, 2000);

            }

        } 

        if(updatePontuation === false){
            if(times.times !== undefined) {
                setTimesArray(times.times);

                const dateArray = [];
                const yearTorney = [];

                yearTorney.push(dateYear.toString());

                times.times.map(element => {

                    element.classification.map(year => {
                        yearTorney.push(year.year.toString());
                    });

                    dateArray.push(element.updatedAt);

                });

                setArrayYearTorney(yearTorney.filter(function(este, i) {
                    return yearTorney.indexOf(este) === i;
                }));

                const dateArraySort = dateArray.sort();

                const dateArraySortLength = dateArraySort.length;

                const splitDateArray = dateArraySort[dateArraySortLength - 1].split('T')[0].split('-');

                const hourDateArray = dateArraySort[dateArraySortLength - 1].split('T')[1].split(':');

                const lastUpdateString = splitDateArray[2] + '/' + splitDateArray[1] + '/' + splitDateArray[0] + ' ' + (Number(hourDateArray[0]) - 3) + ':' + hourDateArray[1];

                setLastUpdate(lastUpdateString);
            }
        }
 
    }, [times.success, timesArray, timesUpdate.success, updatePontuation, valueSelect, valueSelectBoolean, dispatch])

    let positionBrasilA = 0;
    let positionBrasilB = 0;
    let positionMundoA = 0;
    let positionMundoB = 0;

    const styleBackGround = (position, serie) => {

        if(position === 'header'){
            return '5px #5F9EA0 solid';
        }

        if(position === 1){
            return '5px #2E8B57 solid';
        }

        if(position < 7){
            return '5px #1E90FF solid';
        }

        if(position < 15 && serie === 'A'){
            return '5px #DEB887 solid';
        }

        if(position < 25 && serie === 'A'){
            return '5px #B8860B solid';
        }

        if(position < 25 && serie === 'B'){
            return '5px #B8860B solid';
        }

        if(position > 24){
         return '5px red solid';   
        }

    }

    const classificationTime = (name, result, pontuation, games) => {

        if(document.getElementById(name + result).checked){

            setUpdatePontuationTime(true);
            setName(name);
            setResult(result);
            setPontuation(pontuation);
            setGames(games);
            
        };
    }

    const onChangeSelect = () => {
        const selectTag = document.getElementById('select-year');

        const textSelect = selectTag.options[selectTag.selectedIndex].text;

        if(valueSelect.toString() !== textSelect){

                dispatch(getTimes(textSelect));

                setTimesArray(times.times);

                setValueSelect(textSelect);
                setValueSelectBoolean(false);
        }
    } 

    return (

        <>
        <CreateTime
        times = {timesArray} />
        <div className="champions-card-box">
            <div className="last-update">
                Ano: 
                <select className="select-year" id="select-year" onChange={onChangeSelect}>
                    {arrayYearTorney.map(element => {
                       return (
                        <option value={element}>{element}</option>
                       )
                    })}
                </select>
                Último Update: {lastUpdate}
            </div>
            <div className="champions-card">

                {/* SÉRIE A - BRASIL */}
                <div className="marginBottom">
                    <div className="title">
                        <div 
                        style={{borderRight: styleBackGround('header')}}
                        className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE A - BRASIL 
                        </div>
                        <div className="champions-card-title quantity">
                            P
                        </div>
                        <div className="champions-card-title quantity" style={{width: '87px'}}>
                            R
                        </div>
                    </div>
                    {
                    timesArray.map(element => {
                        if(element.seriesType === 'A' && element.country === 'Brasil'){
                            positionBrasilA = positionBrasilA + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div 
                                            style={{borderRight: styleBackGround(positionBrasilA, 'A')}}
                                            className="champions-card-time pos first">
                                                {positionBrasilA}
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name !== undefined ? element.name.length > 15 ? element.surname : element.name : ''}    
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        console.log('ENTROU AQUI', yearClassification.year);
                                                        return yearClassification.pontuation;
                                                    };
                                                })}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                <div className="column-result">
                                                    <label>V</label>
                                                    <input id={element.name + 'V'} type="checkbox" 
                                                    onClick={() => {classificationTime(element.name, 'V', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>E</label>
                                                    <input id={element.name + 'E'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'E', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>D</label>
                                                    <input id={element.name + 'D'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'D', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    })
                    }
                </div>

                {/* SÉRIE B - BRASIL */}
                <div className="marginBottom">
                    <div className="title">
                        <div 
                        style={{borderRight: styleBackGround('header')}}
                        className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE B - BRASIL
                        </div>
                        <div className="champions-card-title quantity">
                            P
                        </div>
                        <div className="champions-card-title quantity" style={{width: '87px'}}>
                            R
                        </div>
                    </div>
                    {
                    timesArray.map(element => {
                        if(element.seriesType === 'B' && element.country === 'Brasil'){
                            positionBrasilB = positionBrasilB + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div 
                                            style={{borderRight: styleBackGround(positionBrasilB, 'B')}}
                                            className="champions-card-time pos first">
                                                {positionBrasilB}
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name !== undefined ? element.name.length > 15 ? element.surname : element.name : ''}    
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                })}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                <div className="column-result">
                                                    <label>V</label>
                                                    <input id={element.name + 'V'} type="checkbox" 
                                                    onClick={() => {classificationTime(element.name, 'V', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>E</label>
                                                    <input id={element.name + 'E'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'E', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>D</label>
                                                    <input id={element.name + 'D'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'D', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    })
                    }
                </div>

                {/* SÉRIE A - MUNDO */}
                <div className="marginBottom">
                    <div className="title">
                        <div 
                         style={{borderRight: styleBackGround('header', 'A')}}
                        className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE A - MUNDO
                        </div>
                        <div className="champions-card-title quantity">
                            P
                        </div>
                        <div className="champions-card-title quantity" style={{width: '87px'}}>
                            R
                        </div>
                    </div>
                    {
                    timesArray.map(element => {
                        if(element.seriesType === 'A' && element.country === 'World'){
                            positionMundoA = positionMundoA + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div 
                                            style={{borderRight: styleBackGround(positionMundoA, 'A')}}
                                            className="champions-card-time pos first">
                                                {positionMundoA}
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name !== undefined ? element.name.length > 15 ? element.surname : element.name : ''}    
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                })}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                <div className="column-result">
                                                    <label>V</label>
                                                    <input id={element.name + 'V'} type="checkbox" 
                                                    onClick={() => {classificationTime(element.name, 'V', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>E</label>
                                                    <input id={element.name + 'E'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'E', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>D</label>
                                                    <input id={element.name + 'D'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'D', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    })
                    }
                </div>
                
                {/* SÉRIE B - MUNDO */}
                <div className="marginBottom">
                    <div className="title">
                        <div 
                        style={{borderRight: styleBackGround('header', 'A')}}
                        className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE B - MUNDO
                        </div>
                        <div className="champions-card-title quantity">
                            P
                        </div>
                        <div className="champions-card-title quantity" style={{width: '87px'}}>
                            R
                        </div>
                    </div>
                    {
                    timesArray.map(element => {
                        if(element.seriesType === 'B' && element.country === 'World'){
                            positionMundoB = positionMundoB + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div 
                                            style={{borderRight: styleBackGround(positionMundoB, 'B')}}
                                            className="champions-card-time pos first">
                                                {positionMundoB}
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name !== undefined ? element.name.length > 15 ? element.surname : element.name : ''}    
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                })}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                <div className="column-result">
                                                    <label>V</label>
                                                    <input id={element.name + 'V'} type="checkbox" 
                                                    onClick={() => {classificationTime(element.name, 'V', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>E</label>
                                                    <input id={element.name + 'E'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'E', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>D</label>
                                                    <input id={element.name + 'D'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'D', element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.pontuation;
                                                    };
                                                }), element.classification.map(yearClassification => {
                                                    if(valueSelect === yearClassification.year){
                                                        return yearClassification.games;
                                                    };
                                                }))}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    })
                    }
                </div>
            </div>
        </div> 
        </>
    );
  }
  
  export default Classification;