import { combineReducers } from 'redux';
import sings from './sings';
import isDisplayForm from './IsDisplayForm';
import selectSong from './selectSong';



const myReducer = combineReducers({
    sings,
    isDisplayForm,
    selectSong
});

export default myReducer;