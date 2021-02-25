import React, { Component } from 'react';
import { Consumer } from './context';

class AddPlayerForm extends Component {
  
  playerInput = React.createRef();

  handleSubmit = (e, addPlayer) => {
    e.preventDefault();
    const value = this.playerInput.current.value;
    addPlayer(value)
    e.currentTarget.reset();
  }

  render () {
    return (
      <Consumer>
        { ({actions}) => {
          return (
            <form onSubmit={(e) => {this.handleSubmit(e, actions.addPlayer)}}>
            <input
              type='text'
              ref={this.playerInput}
              placeholder="Enter a player's name."
            />
            <input
              type='submit'
              value='Add Player'
            />
          </form>
          );
        }}
      </Consumer>
    );
  }
}

export default AddPlayerForm;
