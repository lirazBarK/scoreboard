import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Liraz",
        score: 0,
        id: 1
      },
      {
        name: "Shlomi",
        score: 0,
        id: 2
      },
      {
        name: "Gil",
        score: 0,
        id: 3
      },
      {
        name: "Amir",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;



  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  getHighScore  = () => {
    const scores =  this.state.players.map(p =>  p.score);
    const highScore = Math.max(...scores);
    if(highScore) {
      return highScore;
    } 
    return null;
  }
  

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }



  render() {
    const highScore = this.getHighScore();
    return (

      <div className="scoreboard">
        <Header players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            isHighScore={highScore === player.score}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        )}

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
