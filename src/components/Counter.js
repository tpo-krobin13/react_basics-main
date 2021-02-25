import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';

function Counter ({ index }) {
  return (
    <Consumer>
      { ({actions, players}) => {
        return (
          <div className='counter'>
            <button className='counter-action decrement' onClick={() => actions.changeScore(index, -5)}> - </button>
            <span className='counter-score'>{players[index].score}</span>
            <button className='counter-action increment' onClick={() => actions.changeScore(index, 5)}> + </button>
          </div>
          );
     }}
    </Consumer>
  );
}
Counter.propTypes = {
  score: PropTypes.number,
  index: PropTypes.number
};

export default Counter;
