import React, { Component } from "react";
import "./App.css";
import Right from "./components/Right";
import Left from "./components/Left";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Right />
              <Left />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isDisplayForm: state.allReducer.isDisplayForm
  };
};

export default connect(mapStateToProps, null)(App);
