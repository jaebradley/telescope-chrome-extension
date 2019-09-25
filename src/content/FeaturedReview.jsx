import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import LabelIcon from '@material-ui/icons/Label';
import GradeIcon from '@material-ui/icons/Grade';
import Tooltip from '@material-ui/core/Tooltip';
import RateReviewIcon from '@material-ui/icons/RateReview';
import {
  makeStyles,
} from '@material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Rating from './Rating';
import ExpandableContent from './ExpandableContent';

const useStyles = makeStyles((theme) => ({
  primaryContent: {
    color: theme.palette.primary.main,
  },
  icon: {
    alignItems: 'center',
    paddingLeft: 10,
  },
}));

function FeaturedReview({ data }) {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="featured-review-content"
        id="featured-review-panel-header"
      >
        <Tooltip
          title="Featured Review"
          aria-label="Featured Review"
        >
          <ListItemIcon className={classNames(classes.primaryContent, classes.icon)}>
            <RateReviewIcon fontSize="large" />
          </ListItemIcon>
        </Tooltip>
        <Typography className={classes.primaryContent}>
          {`"${data.headline}"`}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <Tooltip
              title={`Overall Rating: ${data.overallRating}`}
              aria-label={`Overall Rating: ${data.overallRating}`}
            >
              <ListItemIcon className={classes.primaryContent}>
                <GradeIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating>
              { data.overallRating }
            </Rating>
          </ListItem>
          <ListItem>
            <Tooltip
              title="Location"
              aria-label="Location"
            >
              <ListItemIcon className={classes.primaryContent}>
                <LocationCityIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {data.location || 'N/A'}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <Tooltip
              title="Job Title"
              aria-label="Job Title"
            >
              <ListItemIcon className={classes.primaryContent}>
                <LabelIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {data.jobTitle}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <Tooltip
              title="Pros"
              aria-label="Pros"
            >
              <ListItemIcon className={classes.primaryContent}>
                <ThumbUpIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <ExpandableContent>
                {data.prosDescription || 'N/A'}
              </ExpandableContent>
            </ListItemText>
          </ListItem>
          <ListItem>
            <Tooltip
              title="Cons"
              aria-label="Cons"
            >
              <ListItemIcon className={classes.primaryContent}>
                <ThumbDownIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              <ExpandableContent>
                {data.consDescription || 'N/A'}
              </ExpandableContent>
            </ListItemText>
          </ListItem>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

FeaturedReview.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string,
    prosDescription: PropTypes.string,
    consDescription: PropTypes.string,
    jobTitle: PropTypes.string,
    overallRating: PropTypes.number,
    location: PropTypes.string,
  }),
};

FeaturedReview.defaultProps = {
  data: {
    headline: '',
    prosDescription: '',
    consDescription: '',
    jobTitle: '',
    overallRating: null,
    location: '',
  },
};

export default FeaturedReview;
