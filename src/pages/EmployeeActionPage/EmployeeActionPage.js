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
      txtImage: null,
      txtUserName: '',
      txtEmail: ''
    }
  }

  componentDidMount(){
    const { match } = this.props;
    if(match){
      const id = match.params.id;
      callApi(`employees/${id}`, 'GET', null).then(res => {
        this.setState({
          id: res.data.id,
          txtFirstName: res.data.first_name,
          txtLastName: res.data.last_name,
          txtTitle: res.data.title,
          txtUserName: res.data.account.userName,
          txtEmail: res.data.account.email
        })
      })
    }
  }
  onChange = (e) => {
    console.log(e.target.files[0].name)
    
    let target = e.target;
    let name =  target.name;
    let value = target.value;
    this.setState({
      [name]: value,
      txtImage: e.target.files[0].name
    });
   }

   onSave = (e) => {
     e.preventDefault();
     console.log(this.state);
     const { id, txtFirstName, txtLastName, txtTitle, txtImage, txtUserName, txtEmail } = this.state;
     const { history } = this.props;
     if(id){
      callApi(`employees/${id}`, 'PUT', {
        first_name: txtFirstName,
        last_name: txtLastName,
        title: txtTitle,
        account: {
          email: txtEmail,
          image: txtImage,
          userName: txtUserName
        }
       }).then(res => {
        history.push('/employee-list');
       })
     }else{
      callApi('employees', 'POST', {
        id: id,
        first_name: txtFirstName,
        last_name: txtLastName,
        title: txtTitle,
        account: {
          email: txtEmail,
          image: `https://s3.amazonaws.com/uifaces/faces/twitter/andresenfredrik/${txtImage}`,
          userName: txtUserName
        }
       }).then(res => {
        history.push('/employee-list');
       })
     }
   }
  render() {
    const { id, txtFirstName, txtLastName, txtTitle, txtUserName, txtEmail } = this.state;
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
              <label>Image:</label>
              <input type="file"
                   className="image"
                   name="txtImage"
                   accept="image/png, image/jpeg, image/jpg"  
                   onChange={this.onChange} required/>
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
              {id ? 'Update' : 'Save'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EmployeeActionPage;
