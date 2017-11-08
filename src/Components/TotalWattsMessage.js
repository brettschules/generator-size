import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class TotalWattsMessage extends Component{
  constructor(){
    super()
  }

  // this will update the watts values in message container using css transition

  updateRunningWatts = () => {
    var run = document.getElementById("running-watts")
    run.className = "new"
    setTimeout(function() {
      run.className = "after"
    }, 550);
  }

  updateStartingWatts = () => {
    var start = document.getElementById("starting-watts")
    start.className = "new"
    setTimeout(function() {
      start.className = "after"
    }, 550);
  }

  updateTotalWatts = () => {
    var total = document.getElementById("total-watts")
    total.className = "new"
    setTimeout(function() {
      total.className = "after"
    }, 550);
  }


  componentWillReceiveProps(nextProps) {
    this.updateRunningWatts()

    this.updateTotalWatts()

    if (parseInt(nextProps.currentStartingWatts, 10) !== 0)
      this.updateStartingWatts()
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
