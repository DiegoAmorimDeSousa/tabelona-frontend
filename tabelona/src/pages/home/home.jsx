import React from "react";

import './home.css';

import ChampionsCard from '../../components/ChampionsCard/championsCard';
import Menu from '../../components/menu/menu';

function Home(){
    return (
        <>
            <div className="header">
                <div className="title-header">
                    <img src="https://img.icons8.com/flat-round/64/000000/uefa-euro-trophy.png"/>
                    <div>
                        <h2>Bem vindo á Tabelona</h2>
                        <Menu />
                    </div>
                </div>
                <div className="social-header">
                    <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                    <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
                    <img src="https://img.icons8.com/color/48/000000/twitter.png"/>
                </div>
            </div>

            <ChampionsCard />

            <div className="footer">
                Copyright (c)
            </div>
        </>
    )
}

export default Home;