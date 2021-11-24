import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

function Menu(){
    return (
        <>
        <div className="menu">
            <div>
                Home
            </div>
            <div>
                <Link to='/classification'>Pontos corridos</Link>
            </div>
            <div>
                Mata - Mata
            </div>
        </div>
        </>
    )
}

export default Menu;