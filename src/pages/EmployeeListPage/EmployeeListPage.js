import React, { Component } from "react";
import EmployerList from "./../../components/EmployerList";
class EmployeeListPage extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <button type="button" className="btn btn-info mb-10">
            Add Employer
          </button>
          <EmployerList />
        </div>
      </div>
    );
  }
}

export default EmployeeListPage;
