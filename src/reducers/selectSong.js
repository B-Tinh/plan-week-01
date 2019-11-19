import * as types from './../constants/ActionTypes';

const initialState = {};

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SELECT_SONG:
            return action.song;
        default: return state;
    }
}

export default myReducer;