import React, { Component } from 'react';


export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      checkboxes: ["hey"],
      runningWatts: 0,
      startingWatts: 0,
      checkboxesResuls: ""
    }
  }

  handleInputChange = (event) => {
    let convertRunningWattsToInt = parseInt(event.target.dataset.runningwatts, 10)
    let convertStartingWattsToInt = parseInt(event.target.dataset.startingwatts, 10)
    this.setState({
      checkboxesResuls: {...this.state.checkboxesResuls, [event.target.name]: [convertRunningWattsToInt, convertStartingWattsToInt]},
      runningWatts: event.target.checked ? this.state.runningWatts += convertRunningWattsToInt : this.state.runningWatts -= convertRunningWattsToInt,
      startingWatts: event.target.checked ? this.state.startingWatts += convertStartingWattsToInt : this.state.startingWatts -= convertStartingWattsToInt
    })
  }

  render() {
    console.log(this.state.runningWatts)
    console.log(this.state.startingWatts)
    return (
      <div>
        <div class="container">
          <ul>
            <h3>Checkbox Examples</h3>
              <li>
                <input id="checkbox1" class="checkbox" type="checkbox" name="one" data-runningWatts = "1000" data-startingWatts = "1500" onChange={this.handleInputChange}/>
                <label for="checkbox1">Label for checkbox 1 here in the flesh Label for checkbox 1 here in the flesh Label for checkbox 1 here in the flesh  </label>
              </li>
              <li>
                <input id="checkbox2" class="checkbox" type="checkbox" name="two" data-runningWatts = "2000" data-startingWatts = "2500" onChange={this.handleInputChange}/>
                <label for="checkbox2">Label for 2</label>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
