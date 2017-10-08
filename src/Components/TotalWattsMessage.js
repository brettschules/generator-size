import React, { Component } from 'react';

export default class TotalWattsMessage extends Component{
  constructor(){
    super()
  }

  render() {
    return(
      <div className="message"> 
        <h1>You will need</h1>
        <h1>{this.props.runningWatts} running watts</h1>
        <h1>plus {this.props.runningWatts} starting watts</h1>
        <h1>for a total of {this.props.totalStartingWatts} watts </h1>
      </div>
    )
  }
}
