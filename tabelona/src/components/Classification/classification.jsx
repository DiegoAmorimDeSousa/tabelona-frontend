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

    useEffect(() => {


        if(updatePontuation){

            // setTimesArray(times.times)

            // dispatch(updatePontuationTime('name', 'result'));

            // if(timesUpdate.times !== undefined){
            //     setTimesArray(timesUpdate.times)
            // }

            // console.log('É', timesUpdate.times);

            // dispatch(getTimes());

            // if(times.times !== undefined) {
            //     setTimesArray(times.times)
            // }

        } 

        if(updatePontuation === false){
            if(times.times !== undefined) {
                setTimesArray(times.times)
            }
        }
 
    }, [times.success, timesArray, updatePontuation, dispatch])

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

        if(position < 14 && serie === 'A'){
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

    const classificationTime = (name, result) => {

        if(document.getElementById(name + result).checked){

            dispatch(updatePontuationTime(name, result));

            // setUpdatePontuationTime(true);
            
            setTimeout(() => {
                console.log('chamaa', timesUpdate);
                document.getElementById(name + result).checked = false;
            }, 3000);
        };
    }

    return (

        <>
        <CreateTime />
        <div className="champions-card-box">
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
                                                {element.classification[0].pontuation}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                <div className="column-result">
                                                    <label>V</label>
                                                    <input id={element.name + 'V'} type="checkbox" 
                                                    onClick={() => {classificationTime(element.name, 'V')}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>E</label>
                                                    <input id={element.name + 'E'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'E')}}
                                                    />
                                                </div>
                                                <div className="column-result">
                                                    <label>D</label>
                                                    <input id={element.name + 'D'} type="checkbox"
                                                    onClick={() => {classificationTime(element.name, 'D')}}
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
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {element.classification[0].pontuation}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                <div className="column-result">
                                                    <label>V</label>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className="column-result">
                                                    <label>E</label>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className="column-result">
                                                    <label>D</label>
                                                    <input type="checkbox"/>
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
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {element.classification[0].pontuation}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                <div className="column-result">
                                                    <label>V</label>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className="column-result">
                                                    <label>E</label>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className="column-result">
                                                    <label>D</label>
                                                    <input type="checkbox"/>
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
                                                {element.name.length > 15 ? element.surname : element.name}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                {element.classification[0].pontuation}
                                            </div>
                                            <div className="champions-card-time quantity first">
                                                <div className="column-result">
                                                    <label>V</label>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className="column-result">
                                                    <label>E</label>
                                                    <input type="checkbox"/>
                                                </div>
                                                <div className="column-result">
                                                    <label>D</label>
                                                    <input type="checkbox"/>
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