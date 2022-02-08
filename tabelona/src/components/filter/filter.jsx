import React from 'react';

import { FilterComponent } from './styles';

import ButtonFilter from '../buttonFilter/buttonFilter';
import { typeButtons } from './configButtonFilter';

function Filter() {
    return (
        <> 
            <FilterComponent>
                {typeButtons.map((element, index) => {
                    return (
                        <ButtonFilter key={index} configs={element} />
                    )
                })}
            </FilterComponent>
        </>
    );
}
  
export default Filter;