import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from './../actions'

class Left extends Component {
  
  render() { 
    const { selectSong } = this.props;
    return (
      <div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="Left">
              <div className="SongDetails">
                <h2>Song Details</h2>
                <p>Title: {selectSong.song}</p>
                <p>Duration: {selectSong.duration}</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    selectSong: state.selectSong
  }
};


export default connect(mapStateToProps,null)(Left);
