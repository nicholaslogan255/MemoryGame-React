import React from "react";

const Photo = props => (
    <div 
    // add id
    id={props.id} 

    // add the class name so that css can make it look pretty
    className = "photo"
    key = {props.key}

    // Add the background image
    style ={{ backgroundImage: `url("${props.image}")` }}

    // Add the click handler (uses id to make each photo unique)
    onClick={() => props.handleClick(props.id)}
    >
       
    </div>
  );
  
  export default Photo;