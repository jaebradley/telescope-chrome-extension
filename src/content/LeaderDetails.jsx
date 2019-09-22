import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PollIcon from '@material-ui/icons/Poll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import {
  makeStyles,
} from '@material-ui/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
  },
});


function LeaderDetails({ data }) {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        className={classes.root}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="leader-details-content"
        id="leader-details-panel-header"
      >
        <ListItem
          alignItems="flex-start"
          className={classes.listItem}
        >
          <ListItemAvatar>
            <Avatar
              alt={data.name}
              src={data.image.url}
            />
          </ListItemAvatar>
          <ListItemText>
            {data.title}
            {' '}
            {data.name}
          </ListItemText>
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <ListItemIcon>
              <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText>
              {`${data.approvalPercentage}%`}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ThumbDownIcon />
            </ListItemIcon>
            <ListItemText>
              {`${data.disapprovalPercentage}%`}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PollIcon />
            </ListItemIcon>
            <ListItemText>
              {`${data.ratingsCount} reviews`}
            </ListItemText>
          </ListItem>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

LeaderDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    approvalPercentage: PropTypes.number,
    disapprovalPercentage: PropTypes.number,
    ratingsCount: PropTypes.number,
  }),
};

LeaderDetails.defaultProps = {
  data: {
    name: '',
    title: '',
    image: {
      url: null,
    },
    approvalPercentage: null,
    disapprovalPercentage: null,
    ratingsCount: null,
  },
};

export default LeaderDetails;
