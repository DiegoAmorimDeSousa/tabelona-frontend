import React from 'react';

import './championsCard.css';

import FlamengoEscudo from '../../assets/Flamengo-logo-escudo.png';

function championsCard(){
    return (
        <>
            <div className="champions-card-box">
                <div className="champions-card">
                    <div>
                        <div className="title">
                            <div className="champions-card-title pos">
                                POS
                            </div>
                            <div className="champions-card-title name-torney">
                                SÉRIE - A BRASIL
                            </div>
                            <div className="champions-card-title quantity">
                                VS
                            </div>
                        </div>
                        <div className="time">
                            <div className="champions-card-time pos first">
                                1º
                            </div>
                            <div className="champions-card-time name-torney time-torney first">
                                <img src={FlamengoEscudo} />
                                Flamengo
                            </div>
                            <div className="champions-card-time quantity first">
                                2
                            </div>
                        </div>
                        <div className="time">
                            <div className="champions-card-time pos second">
                                2º
                            </div>
                            <div className="champions-card-time name-torney time-torney second">
                                <img src={FlamengoEscudo} />
                                Flamengo
                            </div>
                            <div className="champions-card-time quantity second">
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default championsCard;