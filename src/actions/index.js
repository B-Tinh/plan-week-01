import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";
import {myFirebase} from './../base';

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

export const loginUser = (email, password) => dispatch => {
  dispatch({type: Types.LOGIN_REQUEST});
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user)
      dispatch({
        type: Types.LOGIN_SUCCESS,
        user
      });
    })
    .catch(error => {
      dispatch({
        type: Types.LOGIN_FAILURE
      });
    })
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: Types.LOGOUT_REQUEST
  });
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({
        type: Types.LOGOUT_SUCCESS
      });
    })
    .catch(error => {
      dispatch({
        type: Types.LOGOUT_FAILURE
      });
    });
};

export const verifyAuth = () => dispatch => {
  dispatch({
    type: Types.VERIFY_REQUEST
  });
  myFirebase
    .auth()
    .onAuthStateChanged(user => {
      if (user !== null) {
        dispatch({
          type: Types.LOGIN_SUCCESS,
          user
        });
      }
      dispatch({
        type: Types.VERIFY_SUCCESS
      });
    });
};

// export const deleteUser = (email, password) => dispatch => {
//   dispatch({type: Types.DELETE_REQUEST});
//   myFirebase
//     .auth()
//     .currentUser
//     .delete(email, password)
//     .then(user => {
//       console.log(user)
//       dispatch({
//         type: Types.DELETE_SUCCESS,
//         user
//       });
//     })
//     .catch(error => {
//       dispatch({
//         type: Types.DELETE_FAILURE
//       });
//     })
// };

