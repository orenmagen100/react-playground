import * as types from '../actions/actionTypes';

const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS:
      return action.users;
    case types.SAVED_USER_SUCCESS:
      return [...state, { ...action.user }];
    default:
      return state;
  }
}
