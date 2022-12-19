import React, { Component } from 'react'

export class Square extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      value : null
    }
    this.myStyle = {
      display : "flex",
      border : "1px solid black",
      width : "100%",
      height: "5rem",
      justifyContent:"center",
      alignItems: "center",
      backgroundColor: "white"
    }  
  }
  render() {

    return (
      <button style={this.myStyle}
       className="square" onClick={this.props.onClick}>
      {this.props.value}        
      </button>
    )
  }
}

export default Square