import React, {PropTypes} from 'react';
import PullRequestItem from './PullRequestItem.jsx';
import {cyan500} from 'material-ui/styles/colors';

import {
  Table,
  TableBody,
  TableHeader,
  TableFooter,
  TableHeaderColumn,
  TableRowColumn,
  TableRow
} from 'material-ui/Table';

const HEADERS = ['Author', 'Number', 'Name', 'Status'];

const PullRequestsList = ({pulls}) => {
  return (
    <div>
      <h3>List Pull Requests</h3>
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            {HEADERS.map((header, i)=>
              <TableHeaderColumn key={i}>
                <span style={{color: cyan500}}>{header}</span>
              </TableHeaderColumn>)}
          </TableRow>
        </TableHeader>
        <TableBody
          stripedRows={true}
          showRowHover={true}
          displayRowCheckbox={false}>
          {pulls.map((pull) => <PullRequestItem key={pull.id} pull={pull}/>
          )}
        </TableBody>
        <TableFooter displaySelectAll={false}>
          <TableRow>
            {HEADERS.map((header, i)=>
              <TableRowColumn key={i}>
                <span style={{color: cyan500}}>{header}</span>
              </TableRowColumn>)}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

PullRequestsList.propTypes = {
  pulls: PropTypes.array.isRequired
};

export default PullRequestsList;
