import React, { Component } from 'react';

export default class checkboxes extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <tr>
          <input id={this.props.title} className="checkbox" type="checkbox" name="title" data-runningWatts = {this.props.watts.runningWatts} data-startingWatts = {this.props.watts.startingWatts} onChange={this.props.handleInputChange}/>
          <label for={this.props.title}>{this.props.title}</label>
          <td className="running-watts">{this.props.watts.runningWatts}</td>
          <td className="starting-watts">{this.props.watts.startingWatts}</td>
        </tr>
      </div>
    )
  }
}
