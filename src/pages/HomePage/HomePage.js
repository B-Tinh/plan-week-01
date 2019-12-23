import React, { Component } from "react";
import { connect } from "react-redux";
import { checkCurrentUser } from "../../actions";

class HomePage extends Component {
  componentDidMount() {
    const { history, user, password } = this.props;
    if (user) {
      this.props.checkCurrentUser(history, password);
    } else {
      history.push("/");
    }
    console.log("mounted");
  }

  render() {
    return (
      <div>
        <h1>HomePage</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    password: state.loginOutReducer.password,
  }
};
const mapDispatchToProps = (dispatch, action) => {
  return {
    checkCurrentUser: (history, password) => {
      dispatch(checkCurrentUser(history, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
