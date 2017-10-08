import React, { Component } from 'react';

export default class TotalWattsMessage extends Component{
  constructor(){
    super()
  }

  render() {
    return(
      <div className="message">
        <h1 id="need">You will need</h1>
        <h1 id="running-watts">{this.props.runningWatts.toLocaleString()} running watts</h1>
        <h1 id="starting-watts">plus {this.props.startingWatts.toLocaleString()} starting watts</h1>
        <h1 id="total-watts">for a total of {this.props.totalStartingWatts.toLocaleString()} watts </h1>
      </div>
    )
  }
}
