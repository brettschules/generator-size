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
          <div className="recreational-use">
          <ul>
            <h3>Recreational Use</h3>
              {DataAppliancesAPI["Recreational Use"].map(Recreational =>
                <Checkboxes title = {Recreational.title} watts={Recreational.watts} handleInputChange={this.handleInputChange}/>
              )}
          </ul>
          </div>
          <ul className="storm-emergency-use">
            <h3>Storm Emergency Use</h3>
              {DataAppliancesAPI["Storm Emergency Use"].map(Storm =>
                <Checkboxes title = {Storm.title} watts={Storm.watts} handleInputChange={this.handleInputChange}/>
              )}
          </ul>
          <div className="jobsite">
          <ul>
            <h3>Jobsite</h3>
              {DataAppliancesAPI["Jobsite"].map(Jobsite =>
                <Checkboxes title = {Jobsite.title} watts={Jobsite.watts} handleInputChange={this.handleInputChange}/>
              )}
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
