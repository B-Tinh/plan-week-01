import { combineReducers } from 'redux';
import allReducer from './allReducer';


const myReducer = combineReducers({
    allReducer,
});

export default myReducer;