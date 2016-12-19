import {combineReducers} from 'redux';
import repositories from './repositoryReducer';
import pulls from './pullReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  repositories,
  pulls,
  ajaxCallsInProgress
});

export default rootReducer;
