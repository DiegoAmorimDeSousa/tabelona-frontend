import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Menu from '../../components/menu/menu';
import Classifications from '../../components/Classification/classification';
import Filter from '../../components/filter/filter';

import { HomeComponent } from './style';

function Home(){   

    const showMenu = useSelector(state => state.showMenu);

    useEffect(() => {console.log('show menu:', showMenu);}, [showMenu])

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
            </HomeComponent>
        </>
    );
 }

export default Home