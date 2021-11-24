import React, { useState } from 'react';

import './home.css';

import ChampionsCard from '../../components/ChampionsCard/championsCard';
import ClassificationCard from '../../components/Classification/classification';

function Home(){

    const [Champions, setChampions] = useState(false);
    const [Classification, setClassification] = useState(true);

    const onModal = () => {
        if(Champions === false){
            setChampions(true);
            setClassification(false);
        } 

        if(Classification === false){
            setClassification(true);
            setChampions(false);
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
                            <div onClick={onModal}>
                                Home
                            </div>
                            <div onClick={onModal}>
                                Pontos corridos
                            </div>
                            <div>
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
            </div>

            <div className="footer">
                Copyright (c)
            </div>
        </>
    );
 }

export default Home