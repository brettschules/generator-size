import React, { Component } from 'react';


  const checkboxes = ["hey"]

export default class Home extends Component {
  constructor() {
    super()
  }



  render() {
    console.log(checkboxes[0])
    return (
      <div>
        <div class="container">
          <ul>
            <h3>Checkbox Examples</h3>
              <li>
                <input id="checkbox1" class="checkbox" type="checkbox" />
                <label for="checkbox1">Label for checkbox 1 here in the flesh Label for checkbox 1 here in the flesh Label for checkbox 1 here in the flesh</label>
              </li>
              <li>
                <input id="checkbox2" class="checkbox" type="checkbox" />
                <label for="checkbox2">Label for 2</label>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}
