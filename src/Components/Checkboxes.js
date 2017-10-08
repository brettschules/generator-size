import React, { Component } from 'react';

export default class checkboxes extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <li>
          <input id="checkbox3" className="checkbox" type="checkbox" name="three" data-runningWatts = "5000" data-startingWatts = "5500" onChange={this.props.handleInputChange}/>
          <label for="checkbox3">test  </label>
        </li>
      </div>
    )
  }
}
