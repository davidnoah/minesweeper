import React from 'react';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.board = new Minesweeper.Board(9, 10);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default Game;
