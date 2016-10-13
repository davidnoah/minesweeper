import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTiles(row, i) {
    return row.map((tile, j) => {
      let key = `${i},${j}`;
      return (
        <Tile className='board-tile' tile={tile} key={key}/>
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

  handleClick(e) {
    var pos = e.target.dataset.set;
    const flagged = e.altKey ? true : false;
    this.props.updateGame(pos, flagged);
  }

  render() {
    let rows = this.renderRows();
    return (
      <div className='board-container' onClick={this.handleClick.bind(this)}>
        {rows}
      </div>
    );
  }
}

export default Board;
