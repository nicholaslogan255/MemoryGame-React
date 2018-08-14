import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Photo extends React.Component {

  // Setting the initial state of the Counter component
  state = {
    clicked: 0
  };

  // photoClicked updates the state 
  photoClicked = () => {
    this.state.clicked == 0 ?
    this.setState({ clicked: 1}):
    this.setState({ clicked: 2})
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <img   onClick={this.photoClicked} className="photo" scr={this.photo_url}/>
    );
  }
}

export default Photo;