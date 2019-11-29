import React, { Component } from "react";
import callApi from './../../utils/apiCaller';

class EmployeeActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtFirstName: '',
      txtLastName: '',
      txtTitle: '',
      txtUserName: '',
      txtEmail: ''
    }
  }

  onChange = (e) => {
    let target = e.target;
    let name =  target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
   }

   onSave = (e) => {
     e.preventDefault();
     const { txtFirstName, txtLastName, txtTitle, txtUserName, txtEmail } = this.state;
     const { history } = this.props;
     callApi('employees', 'POST', {
      first_name: txtFirstName,
      last_name: txtLastName,
      title: txtTitle,
      account: {
        email: txtEmail,
        image: '',
        userName: txtUserName
      }
     }).then(res => {
      history.push('/employee-list');
     })

   }
  render() {
    const { txtFirstName, txtLastName, txtTitle, txtUserName, txtEmail } = this.state;
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit = {this.onSave}>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                name="txtFirstName"
                value={txtFirstName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                name="txtLastName"
                value={txtLastName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                className="form-control"
                name="txtTitle"
                value={txtTitle}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>User Name:</label>
              <input
                type="text"
                className="form-control"
                name="txtUserName"
                value={txtUserName}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                name="txtEmail"
                value={txtEmail}
                onChange={this.onChange}
              />
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
