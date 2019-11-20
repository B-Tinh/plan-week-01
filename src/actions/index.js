import * as types from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
};

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
};

export const selectSong = (song) => {
    return {
        type: types.SELECT_SONG,
        song,
    }
};

export const editText = (id, text) => {
    return {
        type: types.EDIT_TEXT,
        id,
        text
    }
}
