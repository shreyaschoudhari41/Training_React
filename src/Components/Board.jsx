import React, { Component } from "react";
import Square from "./Square.jsx";

export class Board extends Component {
    
  constructor(props)
  {
    super(props);
    this.state = {
        squares : Array(9).fill(null),
        xNext : true,
    };
    this.renderSquare = this.renderSquare.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.calculateWinner = this.calculateWinner.bind(this)
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  handleClick(i)
  {
    const square = this.state.squares.slice();
    square[i] = this.state.xNext?'X':'O';
    this.setState(
    {
      squares : square,
      xNext : !this.state.xNext
    }
    )
    // console.log(this.state.xNext)
  }
  renderSquare(i) {

    return <Square
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}
  />
      
  }

  render() {

    const myStyle = {
        display: "flex",
        flexDirection: "row",
      };

    const winner = this.calculateWinner(this.state.squares)

    let status;
    if(winner)
    {
      status = winner + " is the winner";
    }

    else
    {
      status = "Play the move " +  (this.state.xNext?'X':'O');
    }
    return (
      <div className="container">

        <h2 className="container" style={{textAlign:"center"}}>
          {status}
        </h2>
        <div style={myStyle}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div style={myStyle}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div style={myStyle}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
