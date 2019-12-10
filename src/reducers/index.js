import { combineReducers } from 'redux';
import employees from './listEmployeesReducer';
import editEmployee from './editEmployeeReducer';


const rootReducer = combineReducers({
    employees,
    editEmployee,
});

export default rootReducer;