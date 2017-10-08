import React, { Component } from 'react';

export default class checkboxes extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <li>
          <input id="checkbox1" class="checkbox" type="checkbox" name="one" value = "1000" onChange={this.handleInputChange}/>
          <label for="checkbox1">Label for checkbox 1 here in the flesh Label for checkbox 1 here in the flesh Label for checkbox 1 here in the flesh  </label>
        </li>
      </div>
    )
  }
}
