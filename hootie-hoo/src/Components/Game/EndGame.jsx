import React from "react";
import { messages } from "./messages";
import download1 from '../../Downloadables/Dibujo1.png'
import download2 from '../../Downloadables/Dibujo2.png'
import download3 from '../../Downloadables/Dibujo3.png'
import download4 from '../../Downloadables/Dibujo4.png'


class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    messages.sort(() => Math.random() - 0.5);
    return (
      <div className="end-game">
        <div className="message">
          <h2>{messages[0].title}</h2>
          <p>{messages[0].message}</p>
          <a  href={download1, download2, download3, download4} download={messages[0].download}>
          <button>
            descargar
                              
          </button>
          </a> 
          <button className="btn btn-primary" onClick={this.handleClick}>
            Go Again
          </button>
        </div>
      </div>
    );
  }
}

export default EndGame;