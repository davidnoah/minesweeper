import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Minesweeper.Board(9, 10)};
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
    return (
      <Board board={this.state.board} updateGame={this.updateGame.bind(this)} />
    );
  }
}

export default Game;
