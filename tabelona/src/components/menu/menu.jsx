import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, fa } from '@fortawesome/free-solid-svg-icons'

import { MenuComponent } from './style';

function Menu(){
    return (
        <>
            <MenuComponent>
                <nav>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faHome} /> Home
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHome} /> Dashboard
                        </li>
                    </ul>
                </nav>
            </MenuComponent>
        </>
    )
}

export default Menu;