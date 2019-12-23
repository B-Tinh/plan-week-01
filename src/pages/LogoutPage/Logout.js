import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "./../../actions";
import { checkCurrentUser } from "../../actions";

class Logout extends Component {

  componentDidMount() {
    const { history, user, password } = this.props;
    if (user) {
      this.props.checkCurrentUser(history, password);
    } else {
      history.push("/");
    }
    console.log("mounted");
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();       
  };

  render() {
    const { isLoggingOut, logoutError, history, user } = this.props;

    if(user === null){
        history.push("/")
      }
    return (
      <div>
        <h1>This is your app</h1>
        <p>You can Logout here</p>
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
    user: state.loginOutReducer.user,
    password: state.loginOutReducer.password,

  };
};


const mapDispatchToProps = (dispatch, action) => {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    },
    checkCurrentUser: (history, password) => {
      dispatch(checkCurrentUser(history, password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
