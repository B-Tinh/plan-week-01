import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "./../../actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@abc.com",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { history } = this.props;
    const { email, password } = this.state;
    this.props.loginUser(email, password).then(() => history.push('/employee-home'));
  };
  handleChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { email, password } = this.state;
    const { loginError } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>PassWord:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            {loginError && (<p style={{ color: 'red' }}> Incorrect email or password</p>)}
            <button type="submit" className="btn btn-primary">
              Login
              </button>
          </form>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    loginError: state.loginOutReducer.loginError,
    isAuthenticated: state.loginOutReducer.isAuthenticated,
    user: state.loginOutReducer.user

  };
}

const mapDispatchToProps = (dispatch, action) => {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
