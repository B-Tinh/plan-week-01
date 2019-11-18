import React, { Component } from "react";
import "./App.css";
import Right from "./components/Right";
import Left from "./components/Left";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Sings : [
        {
          id : 1,
          song : "No scrubs",
          duration: "3:15"
        },
        {
          id : 2,
          song : "Macarena",
          duration: "3:15"
        },
        {
          id : 3,
          song : "I Want it That Way",
          duration: "3:15"
        },
        {
          id : 4,
          song : "Lose You To Love Me",
          duration: "3:15"
        },
        {
          id : 5,
          song : "Sue Me",
          duration: "3:15"
        },
        {
          id : 6,
          song : "Die A Little Bit",
          duration: "3:15"
        },
        {
          id : 7,
          song : "Sabotage",
          duration: "3:15"
        },
        {
          id : 8,
          song : "All Star",
          duration: "3:15"
        }
      ],
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
    const {Sings,isDisplayForm, selectedSong} = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Right songList = {Sings} isDisplayForm={isDisplayForm} handleSongSelect={this.handleSongSelect}/>
              {isDisplayForm ? <Left mySong={selectedSong} Sings={Sings}/> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
