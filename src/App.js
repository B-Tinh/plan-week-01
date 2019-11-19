import React, { Component } from "react";
import "./App.css";
import Right from "./components/Right";
import Left from "./components/Left";
import {connect} from 'react-redux';
import * as actions from './actions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedSong : null
    }
  }
  handleSongSelect = (song) => {
    this.setState({
      selectedSong: song,
    })
    this.props.onToggleForm();
  }
  render() {
    const {selectedSong} = this.state;
    const {isDisplayForm} = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Right handleSongSelect={this.handleSongSelect}/>
              {(isDisplayForm) ? <Left mySong={selectedSong} /> : ''}
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
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

