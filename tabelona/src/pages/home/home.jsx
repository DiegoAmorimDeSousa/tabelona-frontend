import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../../components/menu/menu';
import Classifications from '../../components/Classification/classification';
import Filter from '../../components/filter/filter';

import { getTimes } from '../../store/GetTimes/GetTimesAction';

import { HomeComponent } from './style';

function Home(){

    const dispatch = useDispatch();

    const showMenu = useSelector(state => state.showMenu);
    const times = useSelector(state => state.times);
    const lastUpdate = useSelector(state => state.lastUpdate);

    useEffect(() => {
        if(times.success === false){
             dispatch(getTimes());
        }
    }, [times.success, showMenu])

    return (
        <>
            <HomeComponent>
                <Menu /> 
                {showMenu === 'Home' || showMenu === 'Classificação' ?
                <div className="container-classification">
                    <Filter />
                    <Classifications />
                </div>
                :
                showMenu === 'Dashboard' ?
                ''
                :
                showMenu === 'Chaveamentos' ?
                ''
                : ''}
                <footer>Últma Alteração: <br />{lastUpdate}</footer>
            </HomeComponent>
        </>
    );
 }

export default Home