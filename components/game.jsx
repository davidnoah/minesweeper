import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Minesweeper.Board(9, 10),
                  disabled: false};
    this.restartGame = this.restartGame.bind(this);

  }

  restartGame() {
    this.setState({board: new Minesweeper.Board(9, 10),
                    disabled: false});
  }

  updateGame(pos, flagged) {
    if (pos) {
      pos = pos.split(",");
      if (flagged) {
        this.state.board.grid[parseInt(pos[0])][parseInt(pos[1])].toggleFlag();
      } else {
        this.state.board.grid[parseInt(pos[0])][parseInt(pos[1])].explore();
      }
      this.setState({board: this.state.board});
    }
  }

  render() {
    let modal;
    let smile = "😃";
    let text = "";
    if (this.state.board.lost() || this.state.board.won()) {
      text = this.state.board.won() ? "You won!" : "You lost!";
      if (text === "You won!") {
        smile = "😎";
      } else {
        smile = "😥";
      }
      if (text === "You lost!") {
        this.state.disabled = true;
      }
    }
    return (
      <div className='game-container'>
        <div className='face-container' onClick={this.restartGame}>
          <div className='status'>{text}</div>
          <div className='face'>{smile}</div>
          <div className='status'>{text}</div>
        </div>
        <Board board={this.state.board} disabled={this.state.disabled} updateGame={this.updateGame.bind(this)} />
      </div>
    );
  }
}

export default Game;
