import {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  addUser,
  updateUser,
  deleteUser
} from './actions';

const usersReducers = (state = {}, action) => {
  if (ADD_USER === action.type) {
    const users = { ...state.users };
    users[action.key] = action.user;

    const newState = {
      ...state,
      users
    };

    return newState;
  } else
  if (UPDATE_USER === action.type) {
    const users = { ...state.users };
    users[action.key] = action.user;

    const newState = {
      ...state,
      users
    };

    return newState;
  } else
  if (DELETE_USER === action.type) {
    let users = { ...state.users };
    delete users[action.key];

    const newState = {
      ...state,
      users
    };

    return newState;
  } else {
    return state;
  }
}

const rootReducer = usersReducers;

export default rootReducer;
