import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Menu from '../../components/menu/menu';
import Classifications from '../../components/Classification/classification';
import Filter from '../../components/filter/filter';
import Statistics from '../../components/Statistics/statistics';
import SweetAlertCreateTime from '../../components/CreateTime/createTime';

import { getTimes } from '../../store/GetTimes/GetTimesAction';

import { HomeComponent } from './style';

function Home(){

    const dispatch = useDispatch();

    const showMenu = useSelector(state => state.showMenu);
    const times = useSelector(state => state.times);
    const lastUpdate = useSelector(state => state.lastUpdate);
    const statusStatistcs = useSelector(state => state.statusStatistcs);

    useEffect(() => {
        if(times.success === false){
             dispatch(getTimes());
        } 
    }, [times.success, showMenu, statusStatistcs])

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
                ''
                : ''}
                <footer>Últma Alteração: <br />{lastUpdate}</footer>
            </HomeComponent>
        </>
    );
 }

export default Home