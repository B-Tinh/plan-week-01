import * as types from '../constants/ActionTypes';

const initialState = {
  sings : [
    {
      id : 1,
      song : "No scrubs",
      duration: "3:15"
    },
    {
      id : 2,
      song : "Macarena",
      duration: "5:29"
    },
    {
      id : 3,
      song : "I Want it That Way",
      duration: "4:15"
    },
    {
      id : 4,
      song : "Lose You To Love Me",
      duration: "4:00"
    },
    {
      id : 5,
      song : "Sue Me",
      duration: "3:11"
    },
    {
      id : 6,
      song : "Die A Little Bit",
      duration: "6:07"
    },
    {
      id : 7,
      song : "Sabotage",
      duration: "2:55"
    },
    {
      id : 8,
      song : "All Star",
      duration: "3:15"
    },
],
isDisplayForm : false,
selectSong: {},
changeinText: ''
}

    
const myReducer = ( state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL:
            return { ...state, sings: [] };
        case types.TOGGLE_FORM:
            return { ...state, isDisplayForm : !state.isDisplayForm };
        case types.SELECT_SONG:
            return { ...state, selectSong : action.song}; 
        case types.CHANGE_IN_TEXT:
            return { ...state, changeinText: action.value};
        case types.EDIT_TEXT:
          const newsing = state.sings.map(sing => {
            if( sing.id !== action.id){
              return sing
            } else {
              return {...sing, song:action.text}
            }
          })
          return {...state, sings: newsing}; 
        default: return state;
    }
    
};

export default myReducer;