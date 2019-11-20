import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from './../actions'

class Left extends Component {

  CloseForm = () => {
    this.props.onToggleForm();
  }
  
  render() { 
    const { selectSong, isDisplayForm } = this.props;
    return (
      <div>
          <div className={isDisplayForm ? "col-xs-3 col-sm-3 col-md-3 col-lg-3" : ''}>
            <div className="Left">
              <div className="SongDetails">
              <span className="glyphicon glyphicon-remove" onClick={this.CloseForm}></span>
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
    isDisplayForm: state.allReducer.isDisplayForm,
    selectSong: state.allReducer.selectSong
  }
};
const mapDispatchToProps = (dispatch, props) => {
  return{
    onToggleForm : () => {
      dispatch(actions.toggleForm());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Left);
