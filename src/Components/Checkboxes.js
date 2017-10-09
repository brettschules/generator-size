import React, { Component } from 'react';

export default class checkboxes extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <li>
          <input id={this.props.title} className="checkbox" type="checkbox" name="title" data-runningWatts = {this.props.watts.runningWatts} data-startingWatts = {this.props.watts.startingWatts} onChange={this.props.handleInputChange}/>
          <label for={this.props.title}>{this.props.title}</label>
          <p className="running-watts">{this.props.watts.runningWatts}</p>
          <p className="starting-watts">{this.props.watts.startingWatts}</p>
        </li>
      </div>
    )
  }
}
