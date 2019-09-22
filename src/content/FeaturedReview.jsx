import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Rating from '@material-ui/lab/Rating';
import List from '@material-ui/core/List';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import LabelIcon from '@material-ui/icons/Label';
import GradeIcon from '@material-ui/icons/Grade';
import PropTypes from 'prop-types';


function FeaturedReview({ data }) {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="featured-review-content"
        id="featured-review-panel-header"
      >
        <Typography>
          {`Featured Review: "${data.headline}"`}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <ListItemIcon>
              <GradeIcon />
            </ListItemIcon>
            <Rating
              value={data.overallRating}
              readOnly
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationCityIcon />
            </ListItemIcon>
            <ListItemText>
              {data.location}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LabelIcon />
            </ListItemIcon>
            <ListItemText>
              {data.jobTitle}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ThumbUpIcon />
            </ListItemIcon>
            <ListItemText>
              {data.prosDescription}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ThumbDownIcon />
            </ListItemIcon>
            <ListItemText>
              {data.consDescription}
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
