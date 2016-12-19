import React, {PropTypes} from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const PullRequestItem = ({pull}) => {
  return (
    <TableRow>
      <TableRowColumn>{pull.user.login}</TableRowColumn>
      <TableRowColumn>{pull.number}</TableRowColumn>
      <TableRowColumn>{pull.title}</TableRowColumn>
      <TableRowColumn>{pull.state}</TableRowColumn>
    </TableRow>
  );
};

PullRequestItem.propTypes = {
  pull: PropTypes.object.isRequired
};

export default PullRequestItem;
