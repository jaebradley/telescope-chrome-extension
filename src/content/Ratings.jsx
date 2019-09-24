import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import PollIcon from '@material-ui/icons/Poll';
import {
  makeStyles,
} from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

import Rating from './Rating';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: 0,
    alignItems: 'center',
  },
  primaryContent: {
    color: theme.palette.primary.main,
  },
}));

function Ratings({ companyName, logoURL, data }) {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="ratings-content"
        id="ratings-panel-header"
      >
        <ListItem
          alignItems="flex-start"
          className={classes.listItem}
        >
          <Tooltip
            title={`Overall: ${data.overall}`}
            aria-label={`Overall: ${data.overall}`}
          >
            <ListItemAvatar>
              <Avatar
                alt={companyName}
                src={logoURL}
              />
            </ListItemAvatar>
          </Tooltip>
          <Rating>
            { data.overall }
          </Rating>
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <Tooltip
              title={`Compensation & Benefits: ${data.compensationAndBenefits}`}
              aria-label={`Compensation & Benefits: ${data.compensationAndBenefits}`}
            >
              <ListItemIcon className={classes.primaryContent}>
                <AttachMoneyIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating>
              { data.compensationAndBenefits }
            </Rating>
          </ListItem>
          <ListItem>
            <Tooltip
              title={`Career Opportunities: ${data.careerOpportunities}`}
              aria-label={`Career Opportunities : ${data.careerOpportunities}`}
            >
              <ListItemIcon className={classes.primaryContent}>
                <TrendingUpIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating>
              { data.careerOpportunities }
            </Rating>
          </ListItem>
          <ListItem>
            <Tooltip
              title={`Work/Life Balance: ${data.workLifeBalance}`}
              aria-label={`Work/Life Balance: ${data.workLifeBalance}`}
            >
              <ListItemIcon className={classes.primaryContent}>
                <DirectionsBikeIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating>
              { data.workLifeBalance }
            </Rating>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.primaryContent}>
              <PollIcon />
            </ListItemIcon>
            <ListItemText>
              {`${data.count} reviews`}
            </ListItemText>
          </ListItem>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

Ratings.propTypes = {
  companyName: PropTypes.string,
  logoURL: PropTypes.string,
  data: PropTypes.shape({
    careerOpportunities: PropTypes.number,
    compensationAndBenefits: PropTypes.number,
    workLifeBalance: PropTypes.number,
    overall: PropTypes.number,
    seniorLeadership: PropTypes.number,
    count: PropTypes.number,
    description: PropTypes.string,
  }),
};

Ratings.defaultProps = {
  companyName: '',
  logoURL: null,
  data: {
    careerOpportunities: null,
    compensationAndBenefits: null,
    workLifeBalance: null,
    overall: null,
    seniorLeadership: null,
    count: null,
    description: '',
  },
};

export default Ratings;
