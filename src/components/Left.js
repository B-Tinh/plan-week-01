import React, { Component } from "react";

class Left extends Component {
  
  render() { 
    const { mySong } = this.props;
    return (
      <div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="Left">
              <div className="SongDetails">
                <h2>Song Details</h2>
                <p>Title: {mySong.song}</p>
                <p>Duration: {mySong.duration}</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Left;
