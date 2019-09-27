import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import PollIcon from '@material-ui/icons/Poll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Avatar from '@material-ui/core/Avatar';
import {
  makeStyles,
} from '@material-ui/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
import isNumber from 'lodash-es/isNumber';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: 0,
    alignItems: 'center',
  },
  primaryContent: {
    color: theme.palette.primary.main,
  },
  avatar: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
}));

const formatPercentage = (value) => {
  if (isNumber(value)) {
    return `${value}%`;
  }

  return 'N/A';
};


function LeaderDetails({ data }) {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="leader-details-content"
        id="leader-details-panel-header"
      >
        <ListItem className={classes.listItem}>
          {
            data.image
              && data.image.url
              && (
                <ListItemAvatar>
                  <Avatar
                    alt={data.name}
                    src={data.image.url}
                  />
                </ListItemAvatar>
              )
          }
          {
            !data.image
              && data.name
              && (
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    alt={data.name}
                  >
                    {data.name[0]}
                  </Avatar>
                </ListItemAvatar>
              )
          }
          {
            !data.image
              && !data.name
              && (
                <ListItemIcon className={classes.primaryContent}>
                  <EmojiPeopleIcon />
                </ListItemIcon>
              )
          }
          <ListItemText>
            <Typography className={classes.primaryContent}>
              {data.title}
              {' '}
              {data.name}
            </Typography>
          </ListItemText>
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <Tooltip
              title="Approval percentage"
              aria-label="Approval percentage"
            >
              <ListItemIcon className={classes.primaryContent}>
                <ThumbUpIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {formatPercentage(data.approvalPercentage)}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <Tooltip
              title="Disapproval percentage"
              aria-label="Disapproval percentage"
            >
              <ListItemIcon className={classes.primaryContent}>
                <ThumbDownIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {formatPercentage(data.disapprovalPercentage)}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <Tooltip
              title="Number of Reviews"
              aria-label="Number of Reviews"
            >
              <ListItemIcon className={classes.primaryContent}>
                <PollIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {`${Number(data.ratingsCount).toLocaleString()} reviews`}
              </Typography>
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
