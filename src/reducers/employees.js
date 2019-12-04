import * as Types from "./../constants/ActionTypes";

const initialState = [];

const employees = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_EMPLOYEES:
      state = action.employees;
      return [...state];
    case Types.DELETE_EMPLOYEE:
      const newState = state.filter(employee => employee.id !== action.id);
      return [...newState];
    case Types.ADD_EMPLOYEE:
      state.push(action.employee);
      return [...state];
    case Types.UPDATE_EMPLOYEE:
      state.filter(employee => employee.id !== action.id);
      return [...state];
    default:
      return [...state];
  }
};

export default employees;
