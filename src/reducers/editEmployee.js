import * as Types from './../constants/ActionTypes';

const initialState = {};

const editEmployee = (state = initialState, action) => {
    switch(action.type){
        case Types.EDIT_EMPLOYEE:
            return action.employee;
        default : return state;
    }
}

export default editEmployee;
