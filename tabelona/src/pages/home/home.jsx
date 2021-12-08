import React, { useState } from 'react';

import './home.css';

import ChampionsCard from '../../components/ChampionsCard/championsCard';
import ClassificationCard from '../../components/Classification/classification';
import SwitchesCard from '../../components/Switches/switches';

function Home(){

    const [Champions, setChampions] = useState(false);
    const [Classification, setClassification] = useState(false);
    const [Switches, setSwitches] = useState(true);

    const onModal = (page) => {
        if(page === 'Champions'){
            setChampions(true);
            setClassification(false);
            setSwitches(false);
        } 

        if(page === 'Classification'){
            setClassification(true);
            setChampions(false);
            setSwitches(false);
        }

        if(page === 'Switches'){
            setClassification(false);
            setChampions(false);
            setSwitches(true);
        }
    }
    
    return (
        <>
            <div className="header">
                <div className="title-header">
                    <img src="https://img.icons8.com/flat-round/64/000000/uefa-euro-trophy.png"/>
                    <div>
                        <h2>Bem vindo á Tabelona</h2>
                        <div className="menu">
                            <div onClick={() => {onModal('Champions')}}>
                                Home
                            </div>
                            <div onClick={() => {onModal('Classification')}}>
                                Pontos corridos
                            </div>
                            <div onClick={() => {onModal('Switches')}}>
                                Mata - Mata
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-header">
                    <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                    <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                    <img src="https://img.icons8.com/color/48/000000/twitter.png"/>
                </div>
            </div>

            <div>
                {
                    Champions === true ? 
                    <ChampionsCard />
                    :
                    ''
                }
                {
                    Classification === true ? 
                    <ClassificationCard />
                    :
                    ''
                }
                {
                    Switches === true ? 
                    <SwitchesCard />
                    :
                    ''
                }
            </div>

            <div className="footer">
                Copyright (c)
            </div>
        </>
    );
 }

export default Home