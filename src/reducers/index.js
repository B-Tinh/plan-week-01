import { combineReducers } from 'redux';
import employees from './listEmployeesReducer';
import editEmployee from './editEmployeeReducer';
import loginOutReducer from './LogInOutReducer';


const rootReducer = combineReducers({
    employees,
    editEmployee,
    loginOutReducer,
});

export default rootReducer;