import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as repoActions from '../actions/repositoriesActions';
import Loading from './common/Loading.jsx';
import PullRequestsList from './PullRequestsList.jsx';


class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.getRepoPulls = this.getRepoPulls.bind(this);
  }

  componentWillMount() {
    if (this.props.repo.id) {
      this.getRepoPulls(this.props.repo);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.repo.id !== this.props.repo.id) {
      this.getRepoPulls(nextProps.repo);
    }
  }

  getRepoPulls(repo) {
    this.props.actions.getRepoPulls(repo);
  }

  renderContent(pulls) {
    return (pulls.length > 0) ? (<PullRequestsList pulls={pulls}/>) : (<h3>No Pull Requests</h3>);
  }

  render() {
    if (this.props.loading) {
      return (
        <Loading />
      );
    }
    return (
      <div>
        <h2>{this.props.repo.name} Repository </h2>
        {this.renderContent(this.props.pulls)}
      </div>
    );
  }
}

Repo.propTypes = {
  repositories: PropTypes.array.isRequired,
  pulls: PropTypes.array.isRequired,
  repo: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

Repo.contextTypes = {
  router: PropTypes.object
};

function getRepoByName(repositories, name) {
  const repo = repositories.filter(repo => repo.name == name);
  if (repo) return repo[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const repoName = ownProps.params.name;
  let repo = {name: repoName};
  if (repoName && state.repositories.length > 0) {
    repo = getRepoByName(state.repositories, repoName);
  }
  let {repositories} = state;

  return {
    repo,
    repositories,
    pulls: state.pulls,
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

export default connect(mapStateToProps, mapDispatchToProps)(Repo);