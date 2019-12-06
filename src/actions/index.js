import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";

export const fetchEmployeeRequest = () => dispatch => {
  return callApi("employees", "", null).then(res => {
    dispatch({
      type: Types.FETCH_EMPLOYEES,
      employees: res.data
    });
  });
};

// export const actFetchEmployees = (employees) => {
//     return {
//         type: Types.FETCH_EMPLOYEES,
//         employees
//     }
// }
export const deleteEmployeeRequest = id => dispatch => {
  return callApi(`employees/${id}`, "DELETE", null).then(res => {
    dispatch({
      type: Types.DELETE_EMPLOYEE,
      id
    });
    dispatch(fetchEmployeeRequest());
  });
};

// export const actDeleteEmployees = (id) => {
//     return {
//         type: Types.DELETE_EMPLOYEE,
//         id
//     }
// }

export const addEmployeeRequest = employee => dispatch => {
  return callApi("employees", "POST", employee).then(res => {
    dispatch({
      type: Types.ADD_EMPLOYEE,
      employee: res.data
    });
  });
};
// export const actAddEmployees = (employee) => {
//     return {
//         type: Types.ADD_EMPLOYEE,
//         employee
//     }
// }

export const editEmployeeRequest = id => dispatch => {
  return callApi(`employees/${id}`, "", null).then(res => {
    dispatch({
      type: Types.EDIT_EMPLOYEE,
      employee: res.data
    });
  });
};

// export const EditEmployees = (employee) => {
//     return {
//         type: Types.EDIT_EMPLOYEE,
//         employee
//     }
// }

export const updateEmployeeRequest = employee => dispatch => {
  return callApi(`employees/${employee.id}`, "PUT", employee).then(res => {
    dispatch({ type: Types.UPDATE_EMPLOYEE, employee: res.data });
    dispatch(fetchEmployeeRequest());
  });
};

// export const actUpdateEmployees = (employee) => {
//     return {
//         type: Types.UPDATE_EMPLOYEE,
//         employee
//     }
// }
