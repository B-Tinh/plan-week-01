import React, { Component } from "react";
import { connect } from "react-redux";
// import { signIn } from './../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passWord: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.signIn(this.state);
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
    const { email, passWord } = this.state;
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
                name="passWord"
                value={passWord}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
  // signIn: (creds) => dispatch(signIn(creds))
}
}

export default connect(null, mapDispatchToProps)(Login);
