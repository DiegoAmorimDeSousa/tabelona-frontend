import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../../components/menu/menu';
import Classifications from '../../components/Classification/classification';
import Filter from '../../components/filter/filter';
import Statistics from '../../components/Statistics/statistics';
import PlayOffs from '../../components/PlayOffs/playOffs';
import SweetAlertCreateTime from '../../components/CreateTime/createTime';

import { getTimes } from '../../store/GetTimes/GetTimesAction';

import { HomeComponent } from './style';

function Home(){

    const dispatch = useDispatch();

    const showMenu = useSelector(state => state.showMenu);
    const times = useSelector(state => state.times);
    const lastUpdate = useSelector(state => state.lastUpdate);
    const statusStatistcs = useSelector(state => state.statusStatistcs);
    const statusPlayOff = useSelector(state => state.statusPlayOff);

    useEffect(() => {
        if(times.success === false){
             dispatch(getTimes());
        } 
    }, [times.success, showMenu, statusStatistcs, statusPlayOff])

    return (
        <>  
            <HomeComponent>
                {/* <SweetAlertCreateTime /> */}
                <Menu /> 
                {showMenu === 'Home' || showMenu === 'Classificação' ?
                <div className="container-classification">
                    <Filter />
                    <div className="container-classification-statistics">
                        <Classifications />
                        <Statistics content={statusStatistcs}/>
                    </div>
                </div>
                :
                showMenu === 'Dashboard' ?
                ''
                :
                showMenu === 'Chaveamentos' ?
                <div className="container-play-off">
                    <h1>{statusPlayOff}</h1>
                    <div className="container-play-off-statistics">
                        <PlayOffs />
                        <Statistics content={statusStatistcs}/>
                    </div>
                </div>
                : ''}
                <footer>Últma Alteração: <br />{lastUpdate}</footer>
            </HomeComponent>
        </>
    );
 }

export default Home