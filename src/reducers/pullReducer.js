import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function pullReducer(state = initialState.pulls, action) {
  switch (action.type) {
    case types.LOAD_PULLS_SUCCESS:
      return action.pulls;

    case types.LOAD_PULLS_ERROR:
    default:
      return state;
  }
}
