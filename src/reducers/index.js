import { combineReducers } from 'redux';
import sings from './sings';
import isDisplayForm from './IsDisplayForm';

const myReducer = combineReducers({
    sings,
    isDisplayForm
});

export default myReducer;