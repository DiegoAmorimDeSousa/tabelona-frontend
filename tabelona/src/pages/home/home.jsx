import React from 'react';

import Menu from '../../components/menu/menu';
import Classifications from '../../components/Classification/classification';

import { HomeComponent } from './style';

function Home(){   
    return (
        <>
            <HomeComponent>
                <Menu /> 
                <Classifications />
            </HomeComponent>
        </>
    );
 }

export default Home