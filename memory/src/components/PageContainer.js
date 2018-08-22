import React, { Component } from "react";
import Scorebar from "./scorebar";
import Photo from "./photo";
import data from "../data.json";

class PageContainer extends Component {
    state = {
        data,
        cur_score: 0,
        high_score: 0
    };

    // When this component mounts, do something
    componentDidMount() {
        this.shuffleData();
        this.resetData();

    }

    // change the state whenever the 
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

   

    // return the object from our data array with the same id
    findObject = (id) => {
       // console.log("Finding id: ",id);
        const mydata = this.state.data;

        // loop through every object, look for matching ids
        for(let i = 0; i < this.state.data.length; i++){
            if(this.state.data[i].id === id){
                //console.log("Found: ",this.state.data[i]);
                return this.state.data[i]
            }
        }
    }

    // returns the index in the data array of the object with id: id
    findDataIndex = (id) => {
        // loop through every object, look for matching ids
        for(let i = 0; i < this.state.data.length; i++){
            if(this.state.data[i].id === id){
                return i;
            }
        }
    }


    resetData = () => {
        // create copy of the state
        let stateCopy = this.state;

        // set every object's clicked attr to false
        for(let i =0; i< stateCopy.data.length; i++){
            stateCopy.data[i].clicked = false;
        }

        // set state with the new info
        this.setState({stateCopy});
    };


    // mix up the position of the photo objects
    shuffleData = () => {

        let stateCopy = this.state;
        let len = stateCopy.data.length


        // the indexs of the two randomly selectd objects
        let i;
        let j;

        // Perform 2n swaps on the object array (n= number of elements to choose from) 
        for( let x = len*3; x>0; x--){
            // pick two random elements
            i = Math.floor(Math.random() *len);
            j = Math.floor(Math.random() * len);
           
            // swap them
            const temp = stateCopy.data[i];
            stateCopy.data[i] = stateCopy.data[j];
            stateCopy.data[j] = temp;
            
        }

        // set state with the new info
        this.setState({stateCopy});
    };

    // function for when a photo has been clicked
  handlePhotoClicked = (id) => {
    //console.log( "Photo Clicked")

    // create copy of the state
    let stateCopy = this.state;

    console.log("Clicked on: ",this.findObject(id));

    // check if the photo has been click on 
    if(this.findObject(id).clicked){
        console.log("Already Clicked")

        // if photo has already been clicked on, reset the game

        // TODO: ADD MODAL
        alert("You already clicked that!");
       
        // reset score to zero
        stateCopy.cur_score =0;

        // clear 
        this.resetData();

        // set state with the new info
        this.setState({stateCopy});
    }
    else{
        console.log("Not Clicked")

        // update this objects clicked attribute
        stateCopy.data[this.findDataIndex(id)].clicked = true;

        // update score
        stateCopy.cur_score +=1;

        // update high score if needed
        if(stateCopy.cur_score > stateCopy.high_score){
            stateCopy.high_score = stateCopy.cur_score
        }

         // set state with the new info
        this.setState({stateCopy});
        
    }

    this.shuffleData();
    

    
  };

    // load the page with the SearchForm and the ResultList components
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-title header-center">
                        Memory Game
                    </div>
                    <div className="App-description header-center">
                    Select as many unique pictures as you can. If you click on an image you have already picked, you have
                    to start over! Try to get all of the pictures!
        
                    </div>
                    
                </div>

                {/* our scorebar */}
                <Scorebar
                    curscore={this.state.cur_score}
                    highscore={this.state.high_score}
                />

    

                <div className="photo-container">

                {this.state.data.map(item => (
                    <Photo
                        key={item.id}
                        id={item.id}
                        // shake={!this.state.score && this.state.topScore}
                        handleClick={this.handlePhotoClicked}
                        image={item.image}
                    />
                  ))
                }

                </div>

            </div>
        );
    }
}

export default PageContainer;