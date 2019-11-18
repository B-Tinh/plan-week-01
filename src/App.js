import React, { Component } from "react";
import "./App.css";
import Right from "./components/Right";
import Left from "./components/Left";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isDisplayForm : false,
      selectedSong : null
    }
  }
  handleSongSelect = (song) => {
    this.setState({
      selectedSong: song,
      isDisplayForm: true
    })
  }
  render() {
    const {isDisplayForm, selectedSong} = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Right isDisplayForm={isDisplayForm} handleSongSelect={this.handleSongSelect}/>
              {isDisplayForm ? <Left mySong={selectedSong} /> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
