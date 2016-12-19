import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as repoActions from '../actions/repositoriesActions';
import {browserHistory} from 'react-router';

import Loading from './common/Loading.jsx';
import AutoCompleteInput from './common/AutoCompleteInput.jsx'
import RepositoryItem from './RepositoryItem.jsx'
import {List} from 'material-ui/List';

class Repositories extends React.Component {
  constructor(props) {
    super(props);
    this.openRepo = this.openRepo.bind(this);
    this.onNewRequest = this.onNewRequest.bind(this);
  }

  openRepo(repo, event) {
    browserHistory.push('/repository/' + repo.name);
  }

  onNewRequest(searchString, index) {
    if (index !== -1) {
      this.openRepo({name: searchString});
    } else {
      this.props.actions.searchRepositories(searchString);
    }
  }

  render() {
    if (this.props.loading) {
      return (<Loading />);
    }
    return (
      <div>
        <AutoCompleteInput
          repos={this.props.repositories}
          onNewRequest={this.onNewRequest}
        />
        <List>
          {this.props.repositories.map((repo) =>
            <RepositoryItem
              key={repo.id}
              repo={repo}
              openRepo={this.openRepo}
            />)}
        </List>
      </div>
    )
  }
}

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

Repositories.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    repositories: state.repositories,
    loading: state.ajaxCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        repoActions
      ), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);