const initialState = {
  employees: [],
  employee: {
    id: "",
      txtFirstName: "",
      txtLastName: "",
      txtTitle: "",
      txtImage: null,
      txtUserName: "",
      txtEmail: ""
  }
}

const employees = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_EMPLOYEES:
          return {...state, employees: action.employees || []};
        case Types.DELETE_EMPLOYEE:
          const newState = state.employees.filter(employee => employee.id !== action.id)         
          return {...state, employees: newState};          
        case Types.ADD_EMPLOYEE:
            state.employees.push(state.employee)
          return {...state};