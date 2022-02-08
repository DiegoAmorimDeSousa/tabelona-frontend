import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TableComponent, DataTimeComponent } from './styles';
import { getTimes } from '../../store/GetTimes/GetTimesAction';

import { headerTable, typeClassification } from './configTable';

function Classification() {

    const dispatch = useDispatch();

    const times = useSelector(state => state.times);

    const [typeHeader, setTypeHeader] = useState('headerTableTorney');
    const [statusClassification, setStatusClassification] = useState({
        country: 'Brasil',
        seriesType: 'A',
        year: 2021
    });
    const [arrayTimes, setArrayTimes] = useState([{}]);

    useEffect(() => {

        dispatch(getTimes());

        if(times.times !== undefined) {

            setArrayTimes(typeClassification(times.times, statusClassification, typeHeader));

        }
 
    }, [times.success])

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
                                <label>V</label>
                                <input type="radio" />
                                <label>E</label>
                                <input type="radio" />
                                <label>D</label>
                                <input type="radio" />
                            </DataTimeComponent>
                        </main>
                    )
                })}
            </TableComponent>
        </>
    );
}
  
export default Classification;