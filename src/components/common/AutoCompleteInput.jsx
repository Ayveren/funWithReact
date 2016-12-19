import React, {PropTypes} from 'react';
import AutoComplete from 'material-ui/AutoComplete'

const AutoCompleteInput = ({repos, onNewRequest}) => {
  return (
    <AutoComplete
      floatingLabelText="Search"
      filter={AutoComplete.fuzzyFilter}
      dataSource={repos.map(el => el.name)}
      maxSearchResults={5}
      onNewRequest={onNewRequest}
    />
  );
};

AutoCompleteInput.propTypes = {
  repos: PropTypes.array.isRequired
};

export default AutoCompleteInput;
