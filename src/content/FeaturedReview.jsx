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
import {
  makeStyles,
} from '@material-ui/styles'
import PropTypes from 'prop-types';

import Rating from './Rating';
import ExpandableContent from './ExpandableContent';

const useStyles = makeStyles((theme) => ({
  primaryContent: {
    color: theme.palette.primary.main,
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
        <Typography className={classes.primaryContent}>
          {`Featured Review: "${data.headline}"`}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <ListItemIcon className={classes.primaryContent}>
              <GradeIcon />
            </ListItemIcon>
            <Rating>
              { data.overallRating }
            </Rating>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.primaryContent}>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {data.location}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.primaryContent}>
              <LabelIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography className={classes.primaryContent}>
                {data.jobTitle}
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.primaryContent}>
              <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText>
              <ExpandableContent>
                {data.prosDescription}
              </ExpandableContent>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.primaryContent}>
              <ThumbDownIcon />
            </ListItemIcon>
            <ListItemText>
              <ExpandableContent>
                {data.consDescription}
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
