import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchEmployeesRequest } from "../actions";
class InfoEmployees extends Component {

  componentDidMount(){
      this.props.fetchAllEmployees();
  }
  onDelete = (id) => {
    this.props.onDelete(id);
  }

  render() {
    const { employee, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="card" style={{ width: 135, height: 135 }}>
            <img
            style={{ width: "100%", height: "100%" }}
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
        <td>{employee.account.userName}</td>
        <td>{employee.account.email}</td>
        <td>
          <Link  
          to={`/employee/${employee.id}/edit`}
          className="btn btn-success mr-10"
          >
            UPDATE
          </Link>
          <button type="button" className="btn btn-danger" onClick={() => this.onDelete(employee.id)}>
            DELETE
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return{
    fetchAllEmployees : () => {
      dispatch(actFetchEmployeesRequest());
    }
  }
}

export default connect(null, mapDispatchToProps)(InfoEmployees);

