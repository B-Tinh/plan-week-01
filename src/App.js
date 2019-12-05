import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              {this.showMenuContent(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  showMenuContent = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((router, index) => {
        return (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={router.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
