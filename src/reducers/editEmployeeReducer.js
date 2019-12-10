import * as Types from '../constants/ActionTypes';

const initialState = {};

const editEmployee = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_EMPLOYEE:
            state = action.employee;
            return {...state}
        default : return state;
    }
}

export default editEmployee;
