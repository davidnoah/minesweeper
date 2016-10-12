import React from 'react';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Minesweeper.Board(9, 10)};
  }

  updateGame() {

  }

  render() {
    return (
      <Board board={this.state.board} updateGame={this.updateGame} />
    );
  }
}

export default Game;
