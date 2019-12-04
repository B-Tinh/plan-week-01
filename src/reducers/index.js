import { combineReducers } from 'redux';
import employees from './employees';
import editEmployee from './editEmployee';


const myReducer = combineReducers({
    employees,
    editEmployee,
});

export default myReducer;