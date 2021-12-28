import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './championsCard.css';

import { getTimes } from '../../store/GetTimes/GetTimesAction';

function ChampionsCard() {

    const dispatch = useDispatch();

    const times = useSelector(state => state.times);

    useEffect(() => {

        dispatch(getTimes());
 
    }, [times.success, dispatch])

    let positionBrasilA = 0;
    let positionBrasilB = 0;
    let positionMundoA = 0;
    let positionMundoB = 0;
    let positionCopaDoBrasil = 0;
    let positionLibertadores = 0;
    let positionCopaMundial = 0;
    let positionSupercopa = 0;
    let positionChampions = 0;

    return (
        <div className="champions-card-box">
            <div className="champions-card">

                {/* SÉRIE A - BRASIL */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE A - BRASIL
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {
                    times.times !== undefined ?  times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Série A - Brasil'){
                                positionBrasilA = positionBrasilA + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionBrasilA}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }   
                        })
                    }) : ''
                    }
                </div>

                {/* SÉRIE B - BRASIL */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE B - BRASIL
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {times.times !== undefined ? times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Série B - Brasil'){
                                positionBrasilB = positionBrasilB + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionBrasilB}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }) : ''}
                </div>

                {/* SÉRIE A - MUNDO */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE A - MUNDO
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {times.times !== undefined ? times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Série A - Mundo'){
                                console.log(element);
                                positionMundoA = positionMundoA + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionMundoA}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }) : ''}
                </div>
                
                {/* SÉRIE B - MUNDO */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE B - MUNDO
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {times.times !== undefined ? times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Série B - Mundo'){
                                positionMundoB = positionMundoB + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionMundoB}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }) : ''}
                </div>

                {/* CHAMPIONS LEAGUE */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            CHAMPIONS LEAGUE
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {times.times !== undefined ? times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Champions League'){
                                positionChampions = positionChampions + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionChampions}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }) : ''}
                </div>

                {/* COPA DO BRASIL */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            COPA DO BRASIL
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {times.times !== undefined ? times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Copa do Brasil'){
                                positionCopaDoBrasil = positionCopaDoBrasil + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionCopaDoBrasil}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }) : ''}
                </div>

                {/* LIBERTADORES */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            LIBERTADORES
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {times.times !== undefined ? times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Libertadores'){
                                positionLibertadores = positionLibertadores + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionLibertadores}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }) : ''}
                </div>

                {/* COPA MUNDIAL */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            COPA MUNDIAL
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {times.times !== undefined ? times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Copa Mundial'){
                                positionCopaMundial = positionCopaMundial + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionCopaMundial}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }) : ''}
                </div>

                {/* SUPERCOPA */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SUPERCOPA
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {times.times !== undefined ? times.times.map(element => {
                        return element.titles.map(title => {
                            if(title.name === 'Supercopa'){
                                positionSupercopa = positionSupercopa + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionSupercopa}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {title.year}
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }) : ''}
                </div>
            </div>
        </div> 
    );
  }
  
  export default ChampionsCard;