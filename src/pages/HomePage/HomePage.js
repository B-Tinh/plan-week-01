import React, { Component } from "react";
import { connect } from "react-redux";
import { checkCurrentUser } from "../../actions";

class HomePage extends Component {
  componentDidMount() {
    const { history, user } = this.props;
    if (user) {
      this.props.checkCurrentUser(history);
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

const mapDispatchToProps = (dispatch, action) => {
  return {
    checkCurrentUser: history => {
      dispatch(checkCurrentUser(history));
    }
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
