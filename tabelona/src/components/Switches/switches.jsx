import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './switches.css';

import { getTimes } from '../../store/GetTimes/GetTimesAction';

function Switches(){    

    const dispatch = useDispatch();

    const times = useSelector(state => state.times);

    const [torney, setTorney] = useState('Copa do Brasil');
    const [arrayInitialAfter16State, setArrayInitialAfter16State] = useState([]);
    const [arrayInitialBefore16State, setArrayInitialBefore16State] = useState([]);
    const [name, setName] = useState('');
    const [result, setResult] = useState('');
    const [pontuation, setPontuation] = useState('');
    const [games, setGames] = useState('');
    const [updatePontuation, setUpdatePontuationTime] = useState(false);

    const arrayInitialAfter16 = [];
    const fakeArray = [];
    const arrayInitialBefore16 = [];

    useEffect(() => {

        dispatch(getTimes());

        if(times.times !== undefined){
            times.times.map(times => {
                times.switching.map(async (switching) => {
                    if(switching.name === torney){

                        await fakeArray.push(switching.moment);

                        if(switching.moment < fakeArray.length / 2 + 1){
                            arrayInitialBefore16.push({
                                moment: switching.moment,
                                time: times.name,
                                logo: times.logo
                            });
                        } else {
                            arrayInitialAfter16.push({
                                moment: switching.moment,
                                time: times.name,
                                logo: times.logo
                            });
                        }
                    }
                });
            });

            setArrayInitialAfter16State(arrayInitialAfter16);
            setArrayInitialBefore16State(arrayInitialBefore16);
        } 
    }, [times.success, torney, dispatch]);

    let positionGrupoA = 0;
    let positionGrupoB = 0;

    const onChangeSelect = async () => {
        const selectTag = document.getElementById('select-torney');

        const textSelect = selectTag.options[selectTag.selectedIndex].text;

        setTorney(selectTag.options[selectTag.selectedIndex].text);

        const fakeArraySelect = []; 

        await times.times.map(times => {
            times.switching.map(async (switching) => {
                if(switching.name === textSelect){

                    await fakeArraySelect.push(switching.moment);

                    if(switching.moment < fakeArraySelect.length / 2 + 1){
                        arrayInitialBefore16.push({
                            moment: switching.moment,
                            time: times.name,
                            logo: times.logo,
                            pontuation: switching.pontuation,
                            games: switching.games,
                            wins: switching.wins,
                        });
                    } else {
                        arrayInitialAfter16.push({
                            moment: switching.moment,
                            time: times.name,
                            logo: times.logo,
                            pontuation: switching.pontuation,
                            games: switching.games,
                            wins: switching.wins,
                        });
                    }
                }
            });
        });

        setArrayInitialAfter16State(arrayInitialAfter16);
        setArrayInitialBefore16State(arrayInitialBefore16);
    }

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

    };

    const classificationTime = (name, result, pontuation, games) => {

        if(document.getElementById(name + result).checked){

            setUpdatePontuationTime(true);
            setName(name);
            setResult(result);
            setPontuation(pontuation[0] === undefined || null ? pontuation[1] : pontuation[0]);
            setGames(games[0] === undefined || null ? games[1] : games[0]);
            
        };
    }

    return (
        <>
            <div className="main-switches">
                <div className="select-switchet">
                    <select name="select" id="select-torney" onChange={onChangeSelect}>
                        <option value="Copa do Brasil" select>Copa do Brasil</option>
                        <option value="Champions League">Champions League</option>
                        <option value="Libertadores">Libertadores</option>
                        <option value="Copa Mundial">Copa Mundial</option>
                    </select>
                </div>
                {torney !== 'Champions League' ?
                <>
                    <div className="select-switchet-array">
                    <div className="select-switchet-center left">
                        {arrayInitialBefore16State.map(element => {
                            return (
                                <div className="switches-box">
                                    <div className="switches-card">
                                        <div className="name-time">
                                            <img style={{width: '30px', maxWidth: '20px', marginRight: '10px'}} src={element.logo} alt="" />
                                            {element.time}
                                        </div>
                                        <input type="text" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                    {arrayInitialBefore16State.map(() => {
                            return (
                                <div className="switches-box">
                                    <div className="switches-card">
                                        <div className="name-time">
                                            x
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="select-switchet-center right">
                        {arrayInitialAfter16State.map(element => {
                            return (
                                <div className="switches-box">
                                    <div className="switches-card">
                                        <input type="text" />
                                        <div className="name-time">
                                            {element.time}
                                            <img style={{width: '30px', maxWidth: '20px', marginLeft: '10px'}} src={element.logo} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                </>
                :
                <>
                <div className="separa-classificacao">
                    <div className="marginBottom">
                    <div className="title">
                        <div 
                        style={{borderRight: styleBackGround('header')}}
                        className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            GRUPO A
                        </div>
                        <div className="champions-card-title quantity">
                            P
                        </div>
                        <div className="champions-card-title quantity" style={{width: '87px'}}>
                            R
                        </div>
                    </div>
                    {
                    arrayInitialAfter16State.map(element => {
                        positionGrupoA = positionGrupoA + 1;
                        return (
                            <>
                                    <div className="time">
                                    <div 
                                    style={{borderRight: styleBackGround(positionGrupoA, 'A')}}
                                    className="champions-card-time pos first">
                                        {positionGrupoA}
                                    </div>
                                    <div className="champions-card-time name-torney time-torney first">
                                        <img src={element.logo} />
                                        {element.time}    
                                    </div>
                                    <div className="champions-card-time quantity first">
                                        {element.pontuation}
                                    </div>
                                    <div className="champions-card-time quantity first">
                                        <div className="column-result">
                                            <label>V</label>
                                            <input id={element.name + 'V'} type="checkbox" 
                                            onClick={() => {classificationTime(element.name, 'V', element.pontuation, element.games)}}
                                            />
                                        </div>
                                        <div className="column-result">
                                            <label>E</label>
                                            <input id={element.name + 'E'} type="checkbox"
                                            onClick={() => {classificationTime(element.name, 'E', element.pontuation, element.games)}}
                                            />
                                        </div>
                                        <div className="column-result">
                                            <label>D</label>
                                            <input id={element.name + 'D'} type="checkbox"
                                            onClick={() => {classificationTime(element.name, 'D', element.pontuation, element.games)}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>

                <div className="marginBottom">
                    <div className="title">
                        <div 
                        style={{borderRight: styleBackGround('header')}}
                        className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            GRUPO A
                        </div>
                        <div className="champions-card-title quantity">
                            P
                        </div>
                        <div className="champions-card-title quantity" style={{width: '87px'}}>
                            R
                        </div>
                    </div>
                    {
                    arrayInitialBefore16State.map(element => {
                        positionGrupoB = positionGrupoB + 1;
                        return (
                            <>
                                    <div className="time">
                                    <div 
                                    style={{borderRight: styleBackGround(positionGrupoB, 'A')}}
                                    className="champions-card-time pos first">
                                        {positionGrupoB}
                                    </div>
                                    <div className="champions-card-time name-torney time-torney first">
                                        <img src={element.logo} />
                                        {element.time}    
                                    </div>
                                    <div className="champions-card-time quantity first">
                                        {element.pontuation}
                                    </div>
                                    <div className="champions-card-time quantity first">
                                        <div className="column-result">
                                            <label>V</label>
                                            <input id={element.name + 'V'} type="checkbox" 
                                            onClick={() => {classificationTime(element.name, 'V', element.pontuation, element.games)}}
                                            />
                                        </div>
                                        <div className="column-result">
                                            <label>E</label>
                                            <input id={element.name + 'E'} type="checkbox"
                                            onClick={() => {classificationTime(element.name, 'E', element.pontuation, element.games)}}
                                            />
                                        </div>
                                        <div className="column-result">
                                            <label>D</label>
                                            <input id={element.name + 'D'} type="checkbox"
                                            onClick={() => {classificationTime(element.name, 'D', element.pontuation, element.games)}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
                </div>
                <div>
                    {/* Final: */}
                </div>
                </>
                }
            </div>
        </>
    );
 }

export default Switches