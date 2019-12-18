import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import EmployeeListPage from './pages/EmployeeListPage/EmployeeListPage';
import EmployeeActionPage from './pages/EmployeeActionPage/EmployeeActionPage';
import Login from './pages/LoginPage/Login';
import Logout from './pages/LogoutPage/Logout';

const routes = [
    {
        path: '/employee-home',
        exact: false,
        main: ({history}) => <HomePage history={history}/>
    },
    {
        path: '/',
        exact: true,
        main: ({history}) => <Login history={history}/>
    },
    {
        path: '/employee-logout',
        exact: false,
        main: ({history}) => <Logout history={history} />
    },
    {
        path: '/employee-list',
        exact: false,
        main: ({history}) => <EmployeeListPage history={history}/>
    },
    {
        path: '/employee/add',
        exact: false,
        main: ({history}) => <EmployeeActionPage history={history}/>
    },
    {
        path: '/employee/:id/edit',
        exact: false,
        main: ({match, history}) => <EmployeeActionPage match={match} history={history}/>
    }
];


  
  export default routes;
