import React, { Component } from "react";
import EmployerList from "./../../components/EmployerList";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { checkCurrentUser } from "../../actions";

class EmployeeListPage extends Component {
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
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/employee/add" className="btn btn-info mb-10">
            Add Employer
          </Link>
          <EmployerList />
        </div>
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


export default connect(null, mapDispatchToProps)(EmployeeListPage);
