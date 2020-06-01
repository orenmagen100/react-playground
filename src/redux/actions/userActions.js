import * as types from './actionTypes';
import * as usersApi from '../../api/usersApi';

// export function createCourse(course) {
//   return { type: types.CREATE_COURSE, course };
// }

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}
export function savedUserSuccess(user) {
  return { type: types.SAVED_USER_SUCCESS, user };
}
// export function addUser(user) {
//   return { type: types.ADD_USER, user };
// }

export function loadUsers() {
  return function(dispatch) {
    return usersApi
      .getUsers()
      .then(users => {
        dispatch(loadUsersSuccess(users));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveUser(user) {
  return function(dispatch) {
    return usersApi
      .saveUser(user)
      .then(() => {
        dispatch(savedUserSuccess(user));
      })
      .catch(error => {
        throw error;
      });
  };
}
