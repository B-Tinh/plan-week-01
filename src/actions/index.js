import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";
import { myFirebase } from "./../base";

export const fetchEmployeeRequest = () => dispatch => {
  return callApi("employees", "", null).then(res => {
    dispatch({
      type: Types.FETCH_EMPLOYEES,
      employees: res.data
    });
  });
};

export const deleteEmployeeRequest = id => dispatch => {
  return callApi(`employees/${id}`, "DELETE", null).then(res => {
    dispatch({
      type: Types.DELETE_EMPLOYEE,
      id
    });
    dispatch(fetchEmployeeRequest());
  });
};

export const addEmployeeRequest = employee => dispatch => {
  return callApi("employees", "POST", employee).then(res => {
    dispatch({
      type: Types.ADD_EMPLOYEE,
      employee: res.data
    });
  });
};

export const editEmployeeRequest = id => dispatch => {
  return callApi(`employees/${id}`, "", null).then(res => {
    dispatch({
      type: Types.EDIT_EMPLOYEE,
      employee: res.data
    });
  });
};

export const updateEmployeeRequest = employee => dispatch => {
  return callApi(`employees/${employee.id}`, "PUT", employee).then(res => {
    dispatch({ type: Types.UPDATE_EMPLOYEE, employee: res.data });
    dispatch(fetchEmployeeRequest());
  });
};

export const loginUser = (email, password) => dispatch => {
  console.log('start promise');
  const promise = new Promise((resolve, reject)=>{
    myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(result => {
      const { user } = result;
      console.log(result);
      console.log(user);
      dispatch({
        type: Types.LOGIN_SUCCESS,
        user
      });
      resolve();
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: Types.LOGIN_FAILURE
      });
      reject();
    });
  });
  console.log(promise); 
  return promise;
};

export const checkCurrentUser = history => dispatch => {
  const user = myFirebase.auth().currentUser;
  myFirebase
    .auth()
    .signInWithEmailAndPassword(user.email, 'test1234').catch(function (error) {
      dispatch({
        type: Types.CHECK_CURRENT_USER,
        user: false,
      });
      history.push('/');
    });
};

export const logoutUser = () => dispatch => {
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
