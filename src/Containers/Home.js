import React, { Component } from 'react';
import Checkboxes from '../Components/Checkboxes'
import DataAppliancesAPI from '../dataAppliancesAPI'


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      runningWatts: 0,
      startingWatts: 0,
      checkboxesResults: ""
    }
  }

  handleInputChange = (event) => {
    let convertRunningWattsToInt = parseInt(event.target.dataset.runningwatts, 10)
    let convertStartingWattsToInt = parseInt(event.target.dataset.startingwatts, 10)
    this.setState({
      checkboxesResults: {...this.state.checkboxesResuls, [event.target.name]: [convertRunningWattsToInt, convertStartingWattsToInt]},
      runningWatts: event.target.checked ? this.state.runningWatts += convertRunningWattsToInt : this.state.runningWatts -= convertRunningWattsToInt,
      startingWatts: event.target.checked ? this.state.startingWatts += convertStartingWattsToInt : this.state.startingWatts -= convertStartingWattsToInt
    })
  }

  render() {

    console.log(this.state.runningWatts)
    console.log(this.state.startingWatts)
    console.log(DataAppliancesAPI)
    return (
      <div>
        <div className="container">
          <ul>
            <h3>Recreational Use</h3>
              <Checkboxes Data = {DataAppliancesAPI["Recreational Use"]}/>
            </ul>
            <ul>
              <h3>Storm Emergency Use</h3>
                <Checkboxes Data = {DataAppliancesAPI["Storm Emergency Use"]} />
              </ul>
              <ul>
                <h3>Jobsite</h3>
                  <Checkboxes Data =  {DataAppliancesAPI["Jobsite"]} />
              </ul>
          </div>
        </div>
    )
  }
}
