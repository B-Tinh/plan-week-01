import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layouts/Layout";

class App extends Component {
  render() {
    return <Router>{this.showMenuContent(routes)}</Router>;
  }
  showMenuContent = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((router, index) => {
        const Main = router.main;
        let content = ({ history, match }) => (
          <Layout history={history} match={match}>
            <Main />
          </Layout>
        );
        if (router.noLayout) {
          content = ({ history, match }) => (
            <Main history={history} match={match} />
          );
        }
        return (
          <Route
            key={index}
            path={router.path}
            exact={router.exact}
            component={content}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
