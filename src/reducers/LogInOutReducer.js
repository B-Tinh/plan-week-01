import * as Types from "../constants/ActionTypes";

const initialState = {
  isLoggingIn: false,
  isLoggingOut: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  user: null
};

const loginOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_SUCCESS:
      console.log("Login success");
      return {
        ...state,
        isLoggingIn: false,
        loginError: false,
        isAuthenticated: true,
        user: action.user || []
      };
    case Types.LOGIN_FAILURE:
      console.log("Login failed");
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true
      };
    case Types.LOGOUT_SUCCESS:
      console.log("Logout success");
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: null
      };
    case Types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true
      };
    case Types.CHECK_CURRENT_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default loginOutReducer;
