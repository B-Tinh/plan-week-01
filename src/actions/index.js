import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';


export const actFetchEmployeesRequest = () => dispatch => {
    return (
        callApi('employees', 'GET', null).then(res => {
            dispatch(actFetchEmployees(res.data));
        })
    );
}

export const actFetchEmployees = (employees) => {
    return {
        type: Types.FETCH_EMPLOYEES,
        employees
    }
}
export const actDeleteEmployeesRequest = (id) => dispatch => {
    return (
        callApi(`employees/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteEmployees(id));
        })
    );
    }

export const actDeleteEmployees = (id) => {
    return {
        type: Types.DELETE_EMPLOYEE,
        id
    }
}

export const actAddEmployeesRequest = (employee) => dispatch => {
    return (
        callApi('employees', 'POST', employee).then(res => {
            dispatch(actAddEmployees(res.data));
        })
    );
}
export const actAddEmployees = (employee) => {
    return {
        type: Types.ADD_EMPLOYEE,
        employee
    }
}