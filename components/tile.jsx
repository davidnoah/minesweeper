import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tile = this.props.tile;
    console.log(tile);
    let tileState = '';
    if (tile.explored) {
      tileState = tile.adjacentBombCount();
      if (tile.flagged) {
        tilestate = '\u2691';
      } else if (tile.bombed) {
        tileState = '\u2622';
      }
    } else if (tile.flagged) {
      tileState = '\u2691';
    }
    return (
      <div className='tile'>{tileState}</div>
    );
  }
}

export default Tile;
