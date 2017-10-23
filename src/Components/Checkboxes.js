import React, { Component } from 'react';

export default class checkboxes extends Component {

  render(){
    return(
      <div className="checkbox-container">
          <input id={this.props.title} className="checkbox" type="checkbox" name="title" data-runningwatts = {this.props.watts.runningWatts} data-startingWatts = {this.props.watts.startingWatts} onChange={this.props.handleInputChange}/>
          <label for={this.props.title}>{this.props.title}</label>
          <div className="running-watts">{this.props.watts.runningWatts}</div>
          <div className="starting-watts">{this.props.watts.startingWatts}</div>
      </div>
    )
  }
}
