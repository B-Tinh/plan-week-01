import React, { Component } from "react";
import InfoEmployees from "./InfoEmployees";
import { connect } from "react-redux";
import { fetchEmployeeRequest, deleteEmployeeRequest } from "../actions";

class EmployerList extends Component {
  componentDidMount() {
    this.props.fetchAllEmployees();
  }

  onDelete = id => {
    this.props.deleteAllEmployees(id);
  };
  render() {
    const { employees } = this.props;
    const infoEmployees = employees.map((employee, index) => {
      return (
        <InfoEmployees
          key={index}
          employee={employee}
          index={index}
          onDelete={this.onDelete}
        />
      );
    });
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
              <tbody>{infoEmployees}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllEmployees: () => {
      dispatch(fetchEmployeeRequest());
    },
    deleteAllEmployees: id => {
      dispatch(deleteEmployeeRequest(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerList);
