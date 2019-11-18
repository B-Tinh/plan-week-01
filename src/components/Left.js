import React, { Component } from "react";
import {get} from 'lodash';

class Left extends Component {
  
  render() {   
    if(!this.props.mySong){
      return <div></div>
    }
    const { Sings } = this.props;
    console.log("sings", Sings)
    return (
      <div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="Left">
              <div className="SongDetails">
                <h2>Song Details</h2>
                <p>Title: {Sings.sing}</p>
                <p>Duration: {Sings.duration}</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Left;
