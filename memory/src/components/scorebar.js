import React, { Component } from "react";

const Scorebar = props => (
    <div id="scorebar">
        <span id="curscore">
        Current Score:
        <span>{props.curscore} </span>
        </span>
        <span id="highscore">
        | High Score:
        <span>{props.highscore}</span>
        </span>
     
    </div>
  );
  
  export default Scorebar;