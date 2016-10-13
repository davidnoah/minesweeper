import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tile = this.props.tile;
    console.log(tile);
    let tileState = 'T';
    if (tile.explored) {
      tileState = tile.adjacentBombCount();
    } else if (tile.flagged) {
      tilestate = '&#9873;';
    } else if (tile.bombed) {
      tileState = '&#128163;';
    }
    return (
      <div>{tileState}</div>
    );
  }
}

export default Tile;
