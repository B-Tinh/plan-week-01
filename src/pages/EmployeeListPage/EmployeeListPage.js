import React, { Component } from "react";
import EmployerList from "./../../components/EmployerList";
import { Link } from 'react-router-dom';
class EmployeeListPage extends Component {
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

export default EmployeeListPage;
