import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './switches.css';

import { getTimes } from '../../store/GetTimes/GetTimesAction';

function Switches(){    

    const dispatch = useDispatch();

    const times = useSelector(state => state.times);

    const [torney, setTorney] = useState('Copa do Brasil');

    const arrayInitial = [];

    useEffect(() => {

        dispatch(getTimes());

        if(times.times !== undefined){
            times.times.map(times => {

                // console.log('EI', (Math.random() * 10).toString().split('.')[0]);

                times.switching.map(switches => {
                    if(switches.name === torney){
                        arrayInitial.push(times);
                    }
                })
            })
        }

        // console.log(arrayInitial);
 
    }, [times.success, dispatch])

    return (
        <>
            <div className="main-switches">
                <div className="select-switchet">
                    <select name="select">
                        <option value="Copa do Brasil" select>Copa do Brasil</option>
                        <option value="Champions">Champions</option>
                        <option value="Libertadores">Libertadores</option>
                        <option value="Copa Mundial">Copa Mundial</option>
                    </select>
                </div>
                <div className="switches-box">
                    <div className="switches-card">
                        <div className="name-time">
                            Flamengo
                        </div>
                        <input type="text" />
                        <div>X</div>
                        <input type="text" />
                        <div className="name-time">
                            Figueirense
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
 }

export default Switches