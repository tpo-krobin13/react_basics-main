import React, { Component } from 'react';

const ScoreboardContext = React.createContext();
export class Provider extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
        isHighScore: false
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
        isHighScore: false
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
        isHighScore: false
      },
      {
        name: "James",
        score: 0,
        id: 4,
        isHighScore: false
      }
    ]};

  handleHighScore = () => {
    this.setState(prevState => {
      const topPlayer =  prevState.players.reduce((topObj, curObj) => (curObj.score > topObj.score) ? curObj : topObj, {score:-1})
    return {
      players: prevState.players.map(p =>  {
        if(p.id === topPlayer.id){
          topPlayer.isHighScore = true
          return topPlayer
        } else {
          p.isHighScore = false
          return p
        }
      })
    }
  })
  }


  handlePlayerAdd = (name) => {
    let newId = Math.max.apply(Math, this.state.players.map(function(o) { return o.id; })) + 1
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: newId
          }
        ]
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    this.handleHighScore()
  }


  render () {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          removePlayer: this.handleRemovePlayer,
          addPlayer: this.handlePlayerAdd,
          changeScore: this.handleScoreChange
        }
      }}>
        {this.props.children}

      </ScoreboardContext.Provider>
    );
  }
}

export const Consumer = ScoreboardContext.Consumer;