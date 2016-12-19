import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

const LOGIN_URL = 'https://api.github.com';

export function loadRepositoriesSuccess(repositories) {
  return {type: types.LOAD_REPOSITORIES_SUCCESS, repositories};
}
export function loadRepositoriesError(error) {
  return {type: types.LOAD_REPOSITORIES_ERROR, error};
}
export function searchRepositoriesSuccess(repositories) {
  return {type: types.SEARCH_REPOSITORIES_SUCCESS, repositories};
}
export function searchRepositoriesError(error) {
  return {type: types.SEARCH_REPOSITORIES_ERROR, error};
}
export function getRepoPullsSuccess(pulls) {
  return {type: types.LOAD_PULLS_SUCCESS, pulls};
}
export function getRepoPullsError(error) {
  return {type: types.LOAD_PULLS_ERROR, error};
}

export function loadRepositories() {
  return (dispatch) => {
    let url = `${LOGIN_URL}/search/repositories?q=stars:>=500&sort=stars&order=desc`;
    dispatch(beginAjaxCall());
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        dispatch(loadRepositoriesSuccess(data.items));
      })
      .catch((error) => {
        dispatch(ajaxCallError());
        dispatch(loadRepositoriesError(error));
        throw(error);
      });
  };
}
export function searchRepositories(searchString) {
  return (dispatch) => {
    let url = `${LOGIN_URL}/search/repositories?q=${searchString}&sort=stars&order=desc`;
    dispatch(beginAjaxCall());
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        if (data.errors) {
          dispatch(ajaxCallError());
          dispatch(searchRepositoriesError(data));
        } else {
          dispatch(searchRepositoriesSuccess(data.items));
        }
      })
      .catch((error) => {
        throw(error);
      });
  };
}

export function getRepoPulls(repo) {
  return (dispatch) => {
    let url = `${LOGIN_URL}/repos/${repo.full_name}/pulls?page=1&per_page=10`;
    dispatch(beginAjaxCall());
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        dispatch(getRepoPullsSuccess(data));
      })
      .catch((error) => {
        dispatch(getRepoPullsError(error));
        throw(error);
      });
  };
}

