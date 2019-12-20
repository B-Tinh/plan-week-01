import React, { Component } from "react";
import { connect } from "react-redux";
import { checkCurrentUser } from "../../actions";

class HomePage extends Component {
  componentDidMount() {
    const { history } = this.props;
    this.props.checkCurrentUser(history);
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
    user: state.loginOutReducer.user
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    checkCurrentUser: history => {
      dispatch(checkCurrentUser(history));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
