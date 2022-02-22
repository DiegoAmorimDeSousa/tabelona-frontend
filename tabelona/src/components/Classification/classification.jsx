import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TableComponent, DataTimeComponent } from './styles';
import { LastUpdateAction } from '../../store/LastUpdate/LastUpdateAction';
import { updatePontuationTime } from '../../store/UpdatePontuation/UpdatePontuationAction';
import { updateStatusStatistcsAction } from '../../store/StatusStatistcs/StatusStatitcsAction';

import { headerTable, typeClassification, selectLastUpdate } from './configTable';

function Classification() {

    const dispatch = useDispatch();

    const times = useSelector(state => state.times);
    const statusClassification = useSelector(state => state.statusClassification);
    const updatedPontuation = useSelector(state => state.updatePontuationTime);

    const [typeHeader, setTypeHeader] = useState('headerTableTorney');
    const [arrayTimes, setArrayTimes] = useState([{}]);
    const [updateOn, setUpdateOn] = useState(false);

    useEffect(() => {

        if(times.times !== undefined && updateOn === false){

            setArrayTimes(typeClassification(times.times, statusClassification));

            dispatch(LastUpdateAction(selectLastUpdate(times.times)));
        }

        if(updatedPontuation.times !== undefined){
            setArrayTimes(typeClassification(updatedPontuation.times, statusClassification));
        }
 
    }, [times.success, statusClassification, updatedPontuation.times])

    const updatePontuation = (time, result) => {
        dispatch(updatePontuationTime(time, result));

        setUpdateOn(true);
    }

    return (
        <>  
            <TableComponent>
                <header>
                    {headerTable(typeHeader).map((element, index) => {
                        return (
                            <div key={index}> {element} </div>
                        )
                    })}
                </header>
                {arrayTimes.map((element, index) => {
                    return (
                        <main key={index}>
                            <DataTimeComponent 
                                position={index}
                                seriesType={element.seriesType}>{index + 1}</DataTimeComponent>
                            <DataTimeComponent 
                                position={index}
                                onClick={() => {dispatch(updateStatusStatistcsAction(element))}}
                                seriesType={element.seriesType}> <img src={element.logo} /> {element.name}</DataTimeComponent>
                            <DataTimeComponent 
                                position={index}
                                seriesType={element.seriesType}>{element.pontuation}</DataTimeComponent>
                            <DataTimeComponent 
                                position={index}
                                seriesType={element.seriesType}>{element.games}</DataTimeComponent>
                            <DataTimeComponent 
                                position={index}
                                seriesType={element.seriesType}>{element.wins}</DataTimeComponent>
                            <DataTimeComponent 
                                position={index}
                                seriesType={element.seriesType}>
                                <label 
                                title="Clique aqui para adicionar vitória ao time" 
                                onClick={() => updatePontuation(element, 'V')} >V</label>
                                <label 
                                title="Clique aqui para adicionar empate ao time" 
                                onClick={() => updatePontuation(element, 'E')}>E</label>
                                <label 
                                title="Clique aqui para adicionar derrota ao time" 
                                onClick={() => updatePontuation(element, 'D')}>D</label>
                            </DataTimeComponent>
                        </main>
                    )
                })}
            </TableComponent>
        </>
    );
}
  
export default Classification;