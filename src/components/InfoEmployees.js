import React, { Component } from "react";

class InfoEmployees extends Component {
  render() {
    const { employee, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="card" style={{ width: "auto" }}>
            <img
              className="card-img-top"
              src={employee.account.image}
              alt="Card image"
            />
          </div>
        </td>
        <td>
          {" "}
          <div className="card-body">
            <h5 className="card-title">First Name: {employee.first_name}</h5>
            <h5 className="card-title">Last Name: {employee.last_name}</h5>
            <h5 className="card-text">Title: {employee.title}</h5>
          </div>
        </td>
        <td>{employee.account.username}</td>
        <td>{employee.account.email}</td>
        <td>
          <button type="button" class="btn btn-success mr-10">
            UPDATE
          </button>
          <button type="button" class="btn btn-danger">
            DELETE
          </button>
        </td>
      </tr>
    );
  }
}

export default InfoEmployees;
