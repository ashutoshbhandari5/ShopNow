import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../Constants/allConstants";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../Constants/allConstants";
import {
  USER_GET_FAIL,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
} from "../Constants/allConstants";
import {
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
} from "../Constants/allConstants";
import {
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  ALL_USER_FAIL,
} from "../Constants/allConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const registerUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_GET_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
      };
    case USER_GET_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        updateUser: action.payload,
      };
    case USER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export const getAllUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USER_REQUEST:
      return {
        loading: true,
      };
    case ALL_USER_SUCCESS:
      return {
        loading: false,
        allUsers: action.payload,
      };
    case ALL_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
