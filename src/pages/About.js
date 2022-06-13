import React, { Component } from 'react';
import "./About.css";
//import profile pic from assets folder
import myFace from "../assets/myFace.jpg";
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              src={myFace}
              alt="profile"
              class="profile_image"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Joshua Zexter</div>
            <div className="brief_description">
              I'm a rising sophmore at the University of Michigan studying Computer Science. I love to swim and play poker!
            </div>
          </div>
        </div>
     </div>
    )
  }
}