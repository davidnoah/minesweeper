import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTiles(row, i) {
    return row.map((tile, j) => {
      return (
        <Tile className='board-tile' tile={tile} key={i + j}/>
      );
    });
  }

  renderRows() {
    return this.props.board.grid.map((row, i) => {
      return (
        <div className='board-row' key={i}>
          {this.renderTiles(row, i)}
        </div>
      );
    });
  }

  render() {
    let rows = this.renderRows();
    return (
      <div className='board-container'>
        {rows}
      </div>
    );
  }
}

export default Board;
