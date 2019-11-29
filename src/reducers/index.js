import { combineReducers } from 'redux';
import employees from './employees';


const myReducer = combineReducers({
    employees,
});

export default myReducer;