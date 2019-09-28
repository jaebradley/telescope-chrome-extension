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


function LeaderDetails({
  title,
  name,
  ratingsCount,
  approvalPercentage,
  disapprovalPercentage,
  image,
}) {
  const classes = useStyles();
  const hasImageUrl = image && image.url;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="leader-details-content"
        id="leader-details-panel-header"
      >
        <ListItem className={classes.listItem}>
          {
            hasImageUrl
              && (
                <ListItemAvatar>
                  <Avatar
                    alt={name}
                    src={image.url}
                  />
                </ListItemAvatar>
              )
          }
          {
            !hasImageUrl
              && name
              && (
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    alt={name}
                  >
                    {name[0]}
                  </Avatar>
                </ListItemAvatar>
              )
          }
          {
            !hasImageUrl
              && !name
              && (
                <ListItemIcon className={classes.primaryContent}>
                  <EmojiPeopleIcon />
                </ListItemIcon>
              )
          }
          <ListItemText>
            <Typography className={classes.primaryContent}>
              {title}
              {' '}
              {name}
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
                {formatPercentage(approvalPercentage)}
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
                {formatPercentage(disapprovalPercentage)}
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
                {`${Number(ratingsCount).toLocaleString()} reviews`}
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

LeaderDetails.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  approvalPercentage: PropTypes.number,
  disapprovalPercentage: PropTypes.number,
  ratingsCount: PropTypes.number,
};

LeaderDetails.defaultProps = {
  name: '',
  title: '',
  image: {
    url: null,
  },
  approvalPercentage: null,
  disapprovalPercentage: null,
  ratingsCount: null,
};

export default LeaderDetails;
