import React, {Component} from 'react';
import GridSquare from './GridSquare.js';

class GameGrid extends Component {
  constructor(props){
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(squareId){
    this.props.containerClickHandler(parseInt(squareId));
  }

  render(){
    console.log(this.props.currentClicks);
    const squares = [];
    for (var i = 0; i < 100; i++) {
      // const isClickable = {if (this.props.clickable="false") {return "disabled}"}
      squares.push(
        <GridSquare
        key={i}
        squareId={i}
        clickHandler={this.clickHandler}
        isClickable={this.props.clickable}
        clickValue={this.props.currentClicks[i]}
        />
      );
    }

    return (
      <div className="game-grid">{squares}</div>
    );
  }
}

export default GameGrid;
