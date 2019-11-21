import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <a href="abc" className="navbar-brand">
            PlanWeek04
          </a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="abc">Home Page</a>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-info mb-10">
                Add Employer
              </button>
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Employer List</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Picture Employer</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="card" style={{ width: "auto" }}>
                            <img
                              className="card-img-top"
                              src="https://s3.amazonaws.com/uifaces/faces/twitter/andresenfredrik/128.jpg"
                              alt="Card image"
                            />
                            <div className="card-body">
                              <h5 className="card-title">First Name: John Doe</h5>
                              <h5 className="card-title">Last Name: Smith</h5>
                              <h5 className="card-text">Title: Future Directives Engineer</h5>
                            </div>
                          </div>
                        </td>
                        <td>Jaqueline.Schuppe93</td>
                        <td>Baylee_Witting@yahoo.com</td>
                        <td>
                          
                          <button type="button" class="btn btn-success mr-10">UPDATE</button>
                          <button type="button" class="btn btn-danger">DELETE</button>
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
