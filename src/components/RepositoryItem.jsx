import React, {PropTypes} from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import StarIcon from 'material-ui/svg-icons/toggle/star';
import {darkBlack, cyan500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

const RepositoryItem = ({repo, openRepo}) => {
  return (
    <div>
      <ListItem
        onClick={openRepo.bind(this, repo)}
        primaryText={
          <span>
            <span style={{color: darkBlack}}>{repo.name} </span>
            {repo.stargazers_count}
            <StarIcon color={cyan500}/>
          </span>
        }
        secondaryText={
          <p>
            Number of open issues is {repo.open_issues}<br />
            Number of watchers is {repo.watchers}
          </p>
        }
        secondaryTextLines={2}
        leftAvatar={<Avatar src={repo.owner.avatar_url}/>}
      />
      <Divider inset={true}/>
    </div>
  );
};

RepositoryItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepositoryItem;
