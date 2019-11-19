import React, { Component } from "react";
import "./App.css";
import Right from "./components/Right";
import Left from "./components/Left";
import {connect} from 'react-redux';
import * as actions from './actions'

class App extends Component {

  render() {
    const {isDisplayForm} = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Right handleSongSelect={this.handleSongSelect}/>
              {(isDisplayForm) ? <Left /> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm
  }
};


export default connect(mapStateToProps,null)(App);

