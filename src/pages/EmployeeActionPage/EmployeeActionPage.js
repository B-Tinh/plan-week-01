import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddEmployeesRequest, actEditEmployeesRequest, actUpdateEmployeesRequest } from "../../actions";

class EmployeeActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtFirstName: "",
      txtLastName: "",
      txtTitle: "",
      txtImage: null,
      txtUserName: "",
      txtEmail: ""
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match) {
      const id = match.params.id;
      this.props.onEditEmployee(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editEmployee) {
      let { editEmployee } = nextProps;
      this.setState({
        id: editEmployee.id,
        txtFirstName: editEmployee.first_name,
        txtLastName: editEmployee.last_name,
        txtTitle: editEmployee.title,
        txtUserName: editEmployee.account.userName,
        txtImage: editEmployee.account.image,
        txtEmail: editEmployee.account.email
      });
    }
  }
  onChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
      // txtImage: e.target.files[0].name
    });
  };

  onSave = e => {
    e.preventDefault();
    const {
      id,
      txtFirstName,
      txtLastName,
      txtTitle,
      txtImage,
      txtUserName,
      txtEmail
    } = this.state;
    const { history } = this.props;
    const employee = {
      id: id,
      first_name: txtFirstName,
      last_name: txtLastName,
      title: txtTitle,
      account: {
        email: txtEmail,
        image: txtImage,
        userName: txtUserName
      }
    };
    if (id) {
      this.props.onUpdateEmployee(employee);
    } else {
      this.props.onAddEmployee(employee)
    }
    history.push("/employee-list");
  }

  render() {
    const {
      id,
      txtFirstName,
      txtLastName,
      txtTitle,
      txtUserName,
      txtEmail,
      txtImage
    } = this.state;
    return (
      <div>
        <h1>{id ? "UPDATE EMPLOYEE" : "ADD EMPLOYEE"}</h1>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.onSave}>
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
              <label>Image:</label>
              <input
                type="text"
                className="form-control"
                name="txtImage"
                value={txtImage}
                accept="image/png, image/jpeg, image/jpg"
                onChange={this.onChange}
                required
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
              {id ? "Update" : "Save"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editEmployee: state.editEmployee
  };
};
const mapDispatchToProps = (dispatch, action) => {
  return {
    onAddEmployee: employee => {
      dispatch(actAddEmployeesRequest(employee));
    },
    onEditEmployee: id => {
      dispatch(actEditEmployeesRequest(id));
    },
    onUpdateEmployee: employee => {
      dispatch(actUpdateEmployeesRequest(employee));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeActionPage);
