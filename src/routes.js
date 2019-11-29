import React from 'react';
import HomePage from './pages/HomePage/HomePage'
import EmployeeListPage from './pages/EmployeeListPage/EmployeeListPage';
import EmployeeActionPage from './pages/EmployeeActionPage/EmployeeActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/employee-list',
        exact: false,
        main: () => <EmployeeListPage />
    },
    {
        path: '/employee/add',
        exact: false,
        main: ({history}) => <EmployeeActionPage history={history}/>
    },
    {
        path: '/employee/:id/edit',
        exact: false,
        main: ({match}) => <EmployeeActionPage match={match}/>
    }
];
export default routes;