export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export function addUser(key, user) {
  console.log(user)
  return {
    type: ADD_USER,
    key: key,
    user: user
  }
}

export function updateUser(key, user) {
  return {
    type: UPDATE_USER,
    key: key,
    user: user
  }
}

export function deleteUser(key) {
  return {
    type: DELETE_USER,
    key: key
  }
}
