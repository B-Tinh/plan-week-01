import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "./../../actions";
class Logout extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(logoutUser());   
    history.push("/")
  };
  render() {
    const { isLoggingOut, logoutError, history } = this.props;
    // if(isLoggingOut){
    //   history.push("/")
    // }
    return (
      <div>
        <h1>This is your app's protected area.</h1>
        <p>Any routes here will also be protected</p>
        <button
          type="button"
          class="btn btn-danger"
          onClick={this.handleLogout}
        >
          Logout
        </button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggingOut: state.loginOutReducer.isLoggingOut,
    logoutError: state.loginOutReducer.logoutError,
  };
};

export default connect(mapStateToProps, null)(Logout);
