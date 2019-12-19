import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    name: "Home Page",
    to: "/employee-home",
    exact: true
  },
  {
    name: "Employee Managenment",
    to: "/employee-list",
    exact: false
  },
  {
    name: "LogOut",
    to: "/employee-logout",
    exact: false
  }
];

const MenuLink = ({ label, to, activeHover }) => {
  return (
    <Route
      path={to}
      exact={activeHover}
      children={({ match }) => {
        let active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    const showMenu = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          activeHover={menu.exact}
        />
      );
    });
    return (
      <div className="navbar navbar-default">
        <a href="abc" className="navbar-brand">
          PlanWeek04
        </a>
        <ul className="nav navbar-nav">
          {/* <li className="active">
              <a href="abc">Home Page</a>
            </li>
            <li>
              <a href="abc">Employee Managenment</a>
            </li> */}
          {showMenu}
        </ul>
      </div>
    );
  }
}

export default Menu;
