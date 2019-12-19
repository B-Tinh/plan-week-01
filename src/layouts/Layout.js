import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../components/Menu";

class Layout extends Component {
  componentDidMount() {
    const { history, user } = this.props;
    if (user == null || (user && !user.uid)) history.push("/");
  }



  render() {
    const { children, ...rest } = this.props;
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            {React.Children.map(children, child => {
              return React.cloneElement(child, {
                ...rest
              });
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginOutReducer.user
  };
};

export default connect(mapStateToProps, null)(Layout);
