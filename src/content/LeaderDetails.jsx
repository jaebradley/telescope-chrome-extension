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
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: 0,
    alignItems: 'center',
  },
  primaryContent: {
    color: theme.palette.primary.main,
  },
}));


function LeaderDetails({ data }) {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
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
            <ListItemIcon className={classes.primaryContent}>
              <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {`${data.approvalPercentage}%`}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.primaryContent}>
              <ThumbDownIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {`${data.disapprovalPercentage}%`}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.primaryContent}>
              <PollIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {`${data.ratingsCount} reviews`}
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
