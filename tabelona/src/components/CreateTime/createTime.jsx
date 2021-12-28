import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './createTime.css';

import { createTime } from '../../store/CreateTime/CreateTimeAction';
import { refreshClassificationAction } from '../../store/RefreshClassification/RefreshClassificationAction';

function CreateTime(props) {

    const dispatch = useDispatch();

    const [modalCadastro, setModalCadastro] = useState(false);
    const [name, setName] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [logo, setLogo] = useState('');
    const [surname, setSurname] = useState('');

    const onModal = () => {
        if(modalCadastro){
            setModalCadastro(false);
        } else {
            setModalCadastro(true);
        }
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeState = (e) => {
        setState(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeLogo = (e) => {
        setLogo(e.target.value);
    }
    
    const onChangeSurname = (e) => {
        setSurname(e.target.value);
    }

    const saveTime = async () => {

        const time = {
            name,
            state,
            country,
            logo,
            surname
        }

        await dispatch(createTime(time));

        window.location.href = '/'
    }

    const refreshClassification = () => {
        const { times } = props;

        dispatch(refreshClassificationAction(times));
    }

    return (
        <>
            <div className="create-time-box">
                <div className="create-time-button" onClick={refreshClassification}>
                    Zerar
                </div>
                <div className="create-time-button" onClick={onModal}>
                    Cadastrar time +
                </div>
            </div>
            
            <div>
                {modalCadastro ? 
                <>              
                <div className="create-time-inputs">
                    <div className="input">
                        <label>Nome</label> <br />
                        <input value={name} onChange={onChangeName} type="text"></input>
                    </div>
                    <div className="input">
                        <label>Estado</label> <br />
                        <input value={state} onChange={onChangeState} type="text"></input>
                    </div>
                    <div className="input">
                        <label>País</label> <br />
                        <input value={country} onChange={onChangeCountry} type="text"></input>
                    </div>
                    <div className="input">
                        <label>Logo</label> <br />
                        <input value={logo} onChange={onChangeLogo} type="text"></input>
                    </div>
                    <div className="input">
                        <label>Apelido</label> <br />
                        <input value={surname} onChange={onChangeSurname} type="text"></input>
                    </div>
                </div>
                </>
                : 
                ''}
            </div>

            <div className="button-save-time">
                {modalCadastro ? 
                <>              
                <div className="save-time">
                    <div onClick={saveTime}>
                        Salvar
                    </div>
                </div> 
                </>
                : 
                ''}
            </div>
        </>
    )
}

export default CreateTime;