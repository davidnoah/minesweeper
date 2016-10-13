import React from 'react';
import Board from './board';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {board: new Minesweeper.Board(9, 10)};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(pos, flagged) {
    console.log(pos, flagged);
  }

  render() {
    return (
      <Board board={this.state.board} updateGame={this.updateGame} />
    );
  }
}

export default Game;
