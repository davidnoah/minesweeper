import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tile = this.props.tile;
    let tileState, klass;
    if (tile.explored) {
      tileState = tile.adjacentBombCount() > 0 ? tile.adjacentBombCount() : '';
      klass = 'explored';
      if (tile.bombed) {
        tileState = '\u2622';
        klass = 'bombed';
      }
    } else if (tile.flagged) {
      tileState = '\u2691';
      klass = 'flagged';
    } else {
      klass = 'unexplored';
    }
    klass = `tile ${klass}`;
    return (
      <div className={klass} data-set={tile.pos}>{tileState}</div>
    );
  }
}

export default Tile;
