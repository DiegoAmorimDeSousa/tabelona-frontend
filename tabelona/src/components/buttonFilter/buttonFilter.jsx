import React from 'react';
import { useDispatch } from 'react-redux';

import { ButtonFilterComponent } from './styles';
import { StatusClassificationAction } from '../../store/StatusClassification/StatusClassificationAction';

function Filter(props) {

    const dispatch = useDispatch();

    const onChangeStatusTable = (status) => {
        dispatch(StatusClassificationAction(status));
    }

    return (
        <> 
            <ButtonFilterComponent onClick={() => onChangeStatusTable(props.configs)}>
                {props.configs.country} - {props.configs.seriesType}
            </ButtonFilterComponent>
        </>
    );
}
  
export default Filter;