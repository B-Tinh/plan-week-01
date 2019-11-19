import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from './../actions'

class SongList extends Component {

  handleSongSelect = () => {
    this.props.onToggleForm()
    this.props.onSelectSong(this.props.song)
  }
  render() {
    const { song, handleSongSelect } = this.props;
    return (
      <div>
        <div className="SongList">         
          <div className="row">
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <span>{song.song}</span>
            </div>           
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <button type="button" className="btn btn-primary" onClick={this.handleSongSelect}>
            Select
          </button>
            </div>           
          </div>         
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sings: state.sings,
    isDisplayForm: state.isDisplayForm
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return{
    onToggleForm : () => {
      dispatch(actions.toggleForm());
    },
    onSelectSong : (song) => {
      dispatch(actions.selectSong(song));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SongList);
