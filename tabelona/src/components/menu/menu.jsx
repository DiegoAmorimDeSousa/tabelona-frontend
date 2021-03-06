import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTag, faTable, faKey, faBars } from '@fortawesome/free-solid-svg-icons'

import { MenuComponent } from './style';
import { ShowMenuAction } from '../../store/ShowMenu/ShowMenuAction';
import { refreshClassificationAction } from '../../store/RefreshClassification/RefreshClassificationAction';

import Logo from '../../assets/logo-tabelona.png';

function Menu(){

    const dispatch = useDispatch();

    const times = useSelector(state => state.times);

    useEffect(() => {
        console.log('Times', times);
    }, [times.success])

    const onClickLinkMenu = (context) => {

        dispatch(ShowMenuAction(context));

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

    const openNavBar = () => {
        const nav = document.getElementsByTagName('nav');

        for (let i = 0; i < nav.length; i++) {
            const element = nav[i];

            element.classList.toggle('nav-menu');
            
        }
    }

    return (
        <>
            <MenuComponent>
                <img src={Logo} alt="Logo Tabelona" />
                <nav>
                    <ul>
                        <li onClick={() => {onClickLinkMenu('Home')}}>
                            <div className="on"><FontAwesomeIcon icon={faHome} /></div> Home
                        </li>
                        <li onClick={() => {onClickLinkMenu('Dashboard')}}>
                            <div><FontAwesomeIcon icon={faTag} /></div> Dashboard
                        </li>
                        <li onClick={() => {onClickLinkMenu('Classifica????o')}}>
                            <div><FontAwesomeIcon icon={faTable} /></div> Classifica????o
                        </li>
                        <li onClick={() => {onClickLinkMenu('Chaveamentos')}}>
                            <div><FontAwesomeIcon icon={faKey} /></div> Chaveamentos
                        </li>
                    </ul>
                </nav>
                <div className="footer-menu">
                    <FontAwesomeIcon 
                    title="Clique aqui para recarregar a tabela" 
                    icon={faKey}
                    onClick={() => {dispatch(refreshClassificationAction(times.times))}} />
                    <FontAwesomeIcon title="Clique aqui para recarregar criar um time" icon={faTable} />
                </div>
                <div className="menu-hamburguer">
                    <FontAwesomeIcon onClick={openNavBar} icon={faBars} />
                </div>
            </MenuComponent>
        </>
    )
}

export default Menu;