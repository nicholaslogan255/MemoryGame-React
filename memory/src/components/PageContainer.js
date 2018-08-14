import React, { Component } from "react";
import Scorebar from "./scorebar";
import Photo from "./photo";


class PageContainer extends Component {
    state = {
        cur_score: 0,
        high_score: 0
    };

    // When this component mounts, do something
    componentDidMount() {

    }

    // change the state whenever the 
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    // load the page with the SearchForm and the ResultList components
    render() {
        return (
            <div class="App">
                <div class="App-header">
                    <div class="App-title header-center">
                        Memory Game
                    </div>
                    <div class="App-description header-center">
                    Select as many unique pictures as you can. If you click on an image you have already picked, you have
                    to start over! Try to get all of the pictures!
        
                    </div>
                    
                </div>

                <Scorebar
                    curscore={this.state.cur_score}
                    highscore={this.state.high_score}
                />

                <div class="photo-container">

                <Photo />
                <Photo photo_url="../assets/steven"/>
                <Photo photo_url="../assets/steven"/>
                <Photo photo_url="../assets/steven"/>
                <Photo photo_url="../assets/steven"/>
                <Photo photo_url="../assets/steven"/>
                <Photo photo_url="../assets/steven"/>
                <Photo photo_url="../assets/steven"/>
                <Photo photo_url="../assets/steven"/>
                  
                </div>




            </div>
        );
    }
}

export default PageContainer;