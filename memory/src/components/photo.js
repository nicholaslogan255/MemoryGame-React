import React from "react";

const Photo = props => (
    <div 
    id={props.id} 
    className = "photo"
    key = {props.key}
    style ={{ backgroundImage: `url("${props.image}")` }}
    onClick={() => props.handleClick(props.id)}
    >
       
    </div>
  );
  
  export default Photo;