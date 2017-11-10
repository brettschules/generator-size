import React, { Component } from 'react';
import Checkboxes from '../Components/Checkboxes'
import TotalWattsMessage from '../Components/TotalWattsMessage'
import DataAppliancesAPI from '../dataAppliancesAPI'
import Footer from '../Components/Footer'
import { Col, Table, Button } from 'react-bootstrap';


export default class Home extends Component {
  constructor() {
    super()
    // keeps try of watts info as checkboxes are checked
    this.state = {
      currentStartingWatts: 0,
      runningWatts: 0,
      startingWatts: 0,
      totalStartingWatts: 0,
      checkboxesResults: ""
    }
  }

  handleInputChange = (event) => {
    let convertRunningWattsToInt = parseInt(event.target.dataset.runningwatts, 10)
    let convertStartingWattsToInt = parseInt(event.target.dataset.startingwatts, 10)
    // setting the state as checkboxes are checked
    this.setState({
      currentStartingWatts: event.target.dataset.startingwatts,
      checkboxesResults: {...this.state.checkboxesResuls, [event.target.name]: [convertRunningWattsToInt, convertStartingWattsToInt]},
      runningWatts: event.target.checked ? this.state.runningWatts += convertRunningWattsToInt : this.state.runningWatts -= convertRunningWattsToInt,
      startingWatts: event.target.checked ? this.state.startingWatts += convertStartingWattsToInt : this.state.startingWatts -= convertStartingWattsToInt,
      totalStartingWatts: this.state.runningWatts + this.state.startingWatts
    })
  }

  // Allows to clear all checkboxes
  clearCheckBoxes = () => {
    var arrayOfCheckboxes = document.getElementsByClassName("checkbox")
    for(let i=0; i<arrayOfCheckboxes.length; i++) {
      if (arrayOfCheckboxes[i].checked)
        arrayOfCheckboxes[i].checked = false
    }
  }


  handleClearSelection = (event) => {
    this.setState({
      currentStartingWatts: 0,
      runningWatts: 0,
      startingWatts: 0,
      totalStartingWatts: 0,
      checkboxesResults: ""
    })
    this.clearCheckBoxes()
  }

  // onScroll = () => {
  //   let lastScrollTop = 0;
  //   let message = document.getElementsByClassName("message");
  //   let styles = window.getComputedStyle(message[0]);
  //   let marginTop = styles.getPropertyValue('margin-top');
  //   let marginTopValue = parseInt(marginTop.slice(0, marginTop.length-2))
  //   window.addEventListener("scroll", function(){
  //     var st = window.pageYOffset
  //     let strollVericalMargin = 0
  //     if (st > lastScrollTop){
  //       console.log(marginTopValue, "top", st, "st")
  //
  //       message[0].style.marginTop = st.toString()+"px"
  //       // console.log(parseInt(marginTop.slice(0, marginTop.length-2),10), "hey")
  //       console.log("strolling down")
  //     } else {
  //       message[0].style.marginTop = st.toString()+"px"
  //
  //       console.log(marginTopValue, "top", st, "st")
  //
  //       console.log("strolling up")
  //     }
  //     lastScrollTop = st;
  //   });
  // }

  // Did not end up needing this, used css instead :p

  render() {
    console.log(this.state.checkboxesResults, "checkboxesResults")
    return (
      <div>
        <div className="container">
          <TotalWattsMessage runningWatts = {this.state.runningWatts} startingWatts = {this.state.startingWatts} totalStartingWatts = {this.state.totalStartingWatts} currentStartingWatts={this.state.currentStartingWatts}/>
            <div>
              <Button className="clear-selection" bsStyle="primary" onClick={this.handleClearSelection}>Clear Selection</Button>
            </div>
          <div className="check-list">
            <Col  md={4}>
            <div className="recreational-use">
              <div className="list-headers"><h3><span>Recreational</span><span className="running-watts-title">Running Watts</span><span className="starting-watts-title">Starting Watts</span></h3></div>
                {DataAppliancesAPI["Recreational Use"].map(Recreational =>
                  <Checkboxes title = {Recreational.title} watts={Recreational.watts} handleInputChange={this.handleInputChange}/>
                )}
              </div>
            </Col>
            <Col  md={4} storm-emergency-use-container>
            <div className="storm-emergency-use">
              <div className="list-headers"><h3><span>Storm Emergency</span><span className="running-watts-title">Running Watts</span><span className="starting-watts-title">Starting Watts</span></h3></div>
                {DataAppliancesAPI["Storm Emergency Use"].map(Storm =>
                  <Checkboxes title = {Storm.title} watts={Storm.watts} handleInputChange={this.handleInputChange}/>
                )}
            </div>
            </Col>
            <Col  md={4}>
            <div className="jobsite">
              <div className="list-headers"><h3><span>Jobsite Use</span><span className="running-watts-title">Running Watts</span><span className="starting-watts-title">Starting Watts</span></h3></div>
                {DataAppliancesAPI["Jobsite"].map(Jobsite =>
                  <Checkboxes title = {Jobsite.title} watts={Jobsite.watts} handleInputChange={this.handleInputChange}/>
                )}
            </div>
            </Col>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
