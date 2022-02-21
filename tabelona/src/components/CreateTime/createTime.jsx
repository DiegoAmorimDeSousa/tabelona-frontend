import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { SweetAlertComponent } from './styles';

import { createTime } from '../../store/CreateTime/CreateTimeAction';

function CreateTime() {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [country, setCountry] = useState('');

    return (
        <>
            <SweetAlertComponent>
                <div>
                    <main>
                        <h2>Nome:</h2>
                        <input 
                            value={name}
                            onChange={e => {setName(e.target.value)}} />
                        <h2>Logo:</h2>
                        <input
                            value={logo}
                            onChange={e => {setLogo(e.target.value)}} />
                        <h2>País:</h2>
                        <input
                            value={country}
                            onChange={e => {setCountry(e.target.value)}} />
                    </main>

                    <div>
                        <button onClick={() => {dispatch(createTime(name, logo, country))}}>Criar time</button>    
                    </div> 
                </div>
            </SweetAlertComponent>
        </>
    )
}

export default CreateTime;