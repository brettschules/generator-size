import React, { Component } from 'react';
import Checkboxes from '../Components/Checkboxes'
import TotalWattsMessage from '../Components/TotalWattsMessage'
import DataAppliancesAPI from '../dataAppliancesAPI'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      runningWatts: 0,
      startingWatts: 0,
      totalStartingWatts: 0,
      checkboxesResults: ""
    }
  }

  handleInputChange = (event) => {
    let convertRunningWattsToInt = parseInt(event.target.dataset.runningwatts, 10)
    let convertStartingWattsToInt = parseInt(event.target.dataset.startingwatts, 10)
    this.setState({
      checkboxesResults: {...this.state.checkboxesResuls, [event.target.name]: [convertRunningWattsToInt, convertStartingWattsToInt]},
      runningWatts: event.target.checked ? this.state.runningWatts += convertRunningWattsToInt : this.state.runningWatts -= convertRunningWattsToInt,
      startingWatts: event.target.checked ? this.state.startingWatts += convertStartingWattsToInt : this.state.startingWatts -= convertStartingWattsToInt,
      totalStartingWatts: this.state.runningWatts + this.state.startingWatts
    })
  }

  render() {

    console.log(this.state.runningWatts, 'run')
    console.log(this.state.startingWatts,"start")
    console.log(this.state.totalStartingWatts, "total")
    return (
      <div>
        <div className="container">
          <TotalWattsMessage runningWatts = {this.state.runningWatts} startingWatts = {this.state.startingWatts} totalStartingWatts = {this.state.totalStartingWatts} />
          <div className="check-list">
            <div className="recreational-use-container">
            <div className="recreational-use">
              <div className="list-headers"><h3>Recreational Use</h3><h3>Running Watts</h3><h3> Starting Watts</h3></div>
                {DataAppliancesAPI["Recreational Use"].map(Recreational =>
                  <Checkboxes title = {Recreational.title} watts={Recreational.watts} handleInputChange={this.handleInputChange}/>
                )}
            </div>
            </div>
            <div className="storm-emergency-use-container">
            <div className="storm-emergency-use">
              <div className="list-headers"><h3>Storm Emergency Use</h3><h3>Running Watts</h3><h3> Starting Watts</h3></div>
                {DataAppliancesAPI["Storm Emergency Use"].map(Storm =>
                  <Checkboxes title = {Storm.title} watts={Storm.watts} handleInputChange={this.handleInputChange}/>
                )}
            </div>
            </div>
            <div className="jobsite-container">
            <div className="jobsite">
            <div className="list-headers"><h3>Jobsite Use</h3><h3>Running Watts</h3><h3> Starting Watts</h3></div>
                {DataAppliancesAPI["Jobsite"].map(Jobsite =>
                  <Checkboxes title = {Jobsite.title} watts={Jobsite.watts} handleInputChange={this.handleInputChange}/>
                )}
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
