import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlayOffComponent } from './style';

import { updateStatusStatistcsAction } from '../../store/StatusStatistcs/StatusStatitcsAction';
import { statusPlayOffAction } from '../../store/StatusPlayOff/StatusPlayOffAction';
import { changeScoreAction } from '../../store/ChangeScore/ChangeScoreAction';

function PlayOffs() {

  const dispatch = useDispatch();

  const times = useSelector(state => state.times);
  const playOff = useSelector(state => state.playOff)

  const [arrayTime, setTimeArray] = useState([
      {name: 'Indefinido', score: 0, moment: '', logo: ''}
  ]);
  const [valueScore, setValueScore] = useState(0);

  useEffect(() => {

    const initialArrayTime = [];

    times.times.map(time => {
      if(time.switching.length > 0) {
        time.switching.map(switching => {
          if(switching.name === playOff && switching.moment !== 'elimined'){
            initialArrayTime.push({
              name: time.name, 
              score: switching.score, 
              moment: switching.moment,
              logo: time.logo,
              titles: time.titles,
              classification: time.classification
            })
          }
        })
      }
    });

    if(initialArrayTime.length === 16) {
      dispatch(statusPlayOffAction('Oitavas de Final'))
    }

    if(initialArrayTime.length === 8) {
      dispatch(statusPlayOffAction('Quartas de Final'))
    }

    if(initialArrayTime.length === 4) {
      dispatch(statusPlayOffAction('Semi-final'))
    }

    if(initialArrayTime.length === 2) {
      dispatch(statusPlayOffAction('Final'))
    }

    setTimeArray(initialArrayTime.sort(function (a, b) {
      if (a.moment > b.moment) {
        return -1;
      }
    }));
      
  }, [times.success, playOff])
  return (
    <PlayOffComponent>
      <div className="display-times">
        <div>
          {arrayTime.map((time, index) => {
            return (
              <div key={index}>
                {time.moment <= arrayTime.length / 2?
                  <div key={index} className="time">
                    <div onClick={() => {dispatch(updateStatusStatistcsAction(time))}}>
                      <img src={time.logo} alt="Logo time" /> 
                      {time.name}
                    </div>
                    <div>
                      <input type="text" value={valueScore}
                      onChange={(e) => {setValueScore(e.target.value); dispatch(changeScoreAction(time, valueScore))}} />
                    </div>
                  </div>
                : ''}
              </div>
            )
          })}
        </div>
        <div>
          {arrayTime.map((time, index) => {
            return (
              <div key={index}>
                {time.moment > arrayTime.length / 2 ?
                  <div className="time">
                    <div>
                      <input type="text" value={valueScore}
                      onChange={(e) => {setValueScore(e.target.value); dispatch(changeScoreAction(time, valueScore))}}/>
                    </div>
                    <div onClick={() => {dispatch(updateStatusStatistcsAction(time))}}>
                      {time.name}
                      <img src={time.logo} alt="Logo time" /> 
                    </div>
                  </div>
                : ''}
              </div>
            )
          })}
        </div>
      </div>
    </PlayOffComponent>
  )
}

export default PlayOffs;