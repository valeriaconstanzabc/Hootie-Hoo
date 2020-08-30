import React from "react";
import Game from "./Game";
import EndGame from "./EndGame";
import '../../Styles/Game.css'


class Main extends React.Component {
  state = {
    showLogin: true,
    showEndGame: false,
    name: "",
    score: 0,
  };

  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogin: boolean });
  };

  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };

  
  render() {
    const { score, showEndGame } = this.state;
    return (
      <div>
        <div className="navbar">
          <div className="game-title">Memory</div>
          <div className="score">Score: {score}</div>
        </div>
        <div>
          {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
          <Game endGame={this.handleEndGame} />
        </div>
      </div>
    );
  }
}

export default Main;