import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
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
  glassdoorImage: {
    height: 12,
  },
  attribution: {
    display: 'flex',
    alignItems: 'center',
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
            title={`Overall Rating for ${companyName}: ${data.overall}`}
            aria-label={`Overall Rating for ${companyName}: ${data.overall}`}
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
            <Tooltip
              title="Number of Reviews"
              aria-label="Number of Reviews"
            >
              <ListItemIcon className={classes.primaryContent}>
                <PollIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              {`${Number(data.count).toLocaleString()} reviews`}
            </ListItemText>
          </ListItem>
          <ListItem>
            <div>
              <a
                className={classes.attribution}
                href="https://www.glassdoor.com/index.htm"
              >
                <Typography
                  className={classes.primaryContent}
                  variant="caption"
                >
                  powered by&nbsp;
                </Typography>
                <img
                  className={classes.glassdoorImage}
                  alt="glassdoor logo"
                  src="https://www.glassdoor.com/static/img/api/glassdoor_logo_80.png"
                  title="Job Search"
                />
              </a>
            </div>
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
