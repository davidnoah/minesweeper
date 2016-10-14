import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Minesweeper.Board(9, 10)};
    this.restartGame = this.restartGame.bind(this);
  }

  restartGame() {
    this.setState({board: new Minesweeper.Board(9, 10)});
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
    if (this.state.board.lost() || this.state.board.won()) {
      const text = this.state.board.won() ? "You won!" : "You lost!";
      modal =
      <div className='modal-screen'>
        <div className='modal-content'>
          <p>{text}</p>
          <button onClick={this.restartGame}>Play Again</button>
        </div>
      </div>;
     }
    return (
      <div className='game-container'>
        {modal}
        <Board board={this.state.board} updateGame={this.updateGame.bind(this)} />
      </div>
    );
  }
}

export default Game;
