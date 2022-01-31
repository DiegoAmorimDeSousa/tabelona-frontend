import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTag, faTable, faKey} from '@fortawesome/free-solid-svg-icons'

import { MenuComponent } from './style';

import Logo from '../../assets/logo-tabelona.png';

function Menu(){

    const OnClickLinkMenu = (context) => {
        const li = document.getElementsByTagName('li');

        for (let i = 0; i < li.length; i++) {
            const element = li[i];

            if(element.innerHTML.includes(context)){
                if(element.firstChild.classList[0] !== 'on'){
                    element.firstChild.classList.toggle('on');
                }
            } else {
                if(element.firstChild.classList[0] === 'on'){
                    element.firstChild.classList.toggle('on');
                }
            }            
        }
    }

    return (
        <>
            <MenuComponent>
                <img src={Logo} alt="Logo Tabelona" />
                <nav>
                    <ul>
                        <li onClick={() => {OnClickLinkMenu('Home')}}>
                            <div className="on"><FontAwesomeIcon icon={faHome} /></div> Home
                        </li>
                        <li onClick={() => {OnClickLinkMenu('Dashboard')}}>
                            <div><FontAwesomeIcon icon={faTag} /></div> Dashboard
                        </li>
                        <li onClick={() => {OnClickLinkMenu('Classificação')}}>
                            <div><FontAwesomeIcon icon={faTable} /></div> Classificação
                        </li>
                        <li onClick={() => {OnClickLinkMenu('Chaveamentos')}}>
                            <div><FontAwesomeIcon icon={faKey} /></div> Chaveamentos
                        </li>
                    </ul>
                </nav>
                <footer>
                    <div></div>
                </footer>
            </MenuComponent>
        </>
    )
}

export default Menu;