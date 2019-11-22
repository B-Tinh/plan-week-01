import React, { Component } from "react";

class EmployeeActionPage extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>User Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EmployeeActionPage;
