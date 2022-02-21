import React from 'react';

import { StatisticsComponent } from './styles';

function Statistics(props) {
    return (
        <> 
            <StatisticsComponent>
                {props.content}
            </StatisticsComponent>
        </>
    );
}
  
export default Statistics;