import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function repositoryReducer(state = initialState.repositories, action) {
  switch (action.type) {
    case types.LOAD_REPOSITORIES_SUCCESS:
    case types.SEARCH_REPOSITORIES_SUCCESS:
      return action.repositories;

    case types.SEARCH_REPOSITORIES_ERROR:
    case types.LOAD_REPOSITORIES_ERROR:
    default:
      return state;
  }
}
