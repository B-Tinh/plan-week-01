import React, { Component } from "react";
import InfoEmployees from "./InfoEmployees";

class EmployerList extends Component {
  render() {
      const employees = [];
      const infoEmployees = employees.map((employee, index) => {
        return(
            <InfoEmployees
                key={index}
                employee={employee}
                index={index}
            />
        );
      })
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Employer List</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Picture Employer</th>
                  <th>Information</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {infoEmployees}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployerList;
