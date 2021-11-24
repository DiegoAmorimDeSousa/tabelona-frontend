import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './classification.css';

import CreateTime from '../../components/CreateTime/createTime';

import { getTimes } from '../../store/GetTimes/GetTimesAction';

function Classification() {

    const dispatch = useDispatch();

    const times = useSelector(state => state.times);

    const [arrayTimes, setArrayTimes] = useState([]);

    useEffect(() => {

        dispatch(getTimes());

        if(times.times !== undefined) {

            console.log(times.times.sort(function (a, b) {

                if(a.classification.pontuation !== undefined && b.classification.pontuation !== undefined) {
                    if(a.classification.pontuation > b.classification.pontuation){
                        return 1;
                    } else {
                        return -1
                    }   
                }           
            }));

            // setArrayTimes(times.times.sort(function (a, b) {
	
            //     return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
             
            // }));
        }
 
    }, [times.success, arrayTimes, dispatch])

    let positionBrasilA = 0;
    let positionBrasilB = 0;
    let positionMundoA = 0;
    let positionMundoB = 0;
    let positionMundoC = 0;

    const styleBackGround = (position) => {

        if(position === 1){
            return '#2E8B57';
        }

        if(position < 7){
            return '#1E90FF';
        }

        if(position < 14){
            return '#DEB887';
        }

        if(position < 25){
            return '#B8860B';
        }

        if(position > 24){
         return 'red';   
        }

    }

    return (

        <>
        <CreateTime />
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
                            P
                        </div>
                        <div className="champions-card-title quantity">
                            J
                        </div>
                        <div className="champions-card-title quantity">
                            V
                        </div>
                    </div>
                    {
                    times.times !== undefined ?  times.times.map(element => {
                        if(element.seriesType === 'A' && element.country === 'Brasil'){
                            positionBrasilA = positionBrasilA + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div 
                                            style={{ backgroundColor: styleBackGround(positionBrasilA)}} 
                                            className="champions-card-time pos first">
                                                {positionBrasilA}º
                                            </div>
                                            <div
                                            style={{ backgroundColor: styleBackGround(positionBrasilA)}}
                                            className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name !== undefined ? element.name.length > 15 ? element.surname : element.name : ''}
                                            </div>
                                            <div 
                                            style={{ backgroundColor: styleBackGround(positionBrasilA)}}
                                            className="champions-card-time quantity first">
                                                {element.classification.pontuation}
                                            </div>
                                            <div 
                                            style={{ backgroundColor: styleBackGround(positionBrasilA)}}
                                            className="champions-card-time quantity first">
                                                {element.classification.games}
                                            </div>
                                            <div 
                                            style={{ backgroundColor: styleBackGround(positionBrasilA)}}
                                            className="champions-card-time quantity first">
                                                {element.classification.wins}
                                            </div>
                                        </div>
                                    </>
                                )
                        }
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
                    {
                    times.times !== undefined ?  times.times.map(element => {
                        if(element.seriesType === 'B' && element.country === 'Brasil'){
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
                                                {element.classification[0].pontuation}
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    }) : ''
                    }
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
                    {
                    times.times !== undefined ?  times.times.map(element => {
                        if(element.seriesType === 'A' && element.country === 'World'){
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
                                                {element.classification[0].pontuation}
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    }) : ''
                    }
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
                    {
                    times.times !== undefined ?  times.times.map(element => {
                        if(element.seriesType === 'B' && element.country === 'World'){
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
                                                {element.classification[0].pontuation}
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    }) : ''
                    }
                </div>

                {/* SÉRIE C - MUNDO */}
                <div className="marginBottom">
                    <div className="title">
                        <div className="champions-card-title pos">
                            POS
                        </div>
                        <div className="champions-card-title name-torney">
                            SÉRIE C - MUNDO
                        </div>
                        <div className="champions-card-title quantity">
                            ANO
                        </div>
                    </div>
                    {
                    times.times !== undefined ?  times.times.map(element => {
                        if(element.seriesType === 'C' && element.country === 'World'){
                            positionMundoC = positionMundoC + 1;
                                return (
                                    <>
                                         <div className="time">
                                            <div className="champions-card-time pos first">
                                                {positionMundoC}º
                                            </div>
                                            <div className="champions-card-time name-torney time-torney first">
                                                <img src={element.logo} />
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {element.classification[0].pontuation}
                                            </div>
                                        </div>
                                    </>
                                )
                        }
                    }) : ''
                    }
                </div>
            </div>
        </div> 
        </>
    );
  }
  
  export default Classification;