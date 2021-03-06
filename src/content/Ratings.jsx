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
import WorkIcon from '@material-ui/icons/Work';
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
  avatar: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
  },
  tooltip: {
    zIndex: 99999,
  },
}));

function Ratings({
  companyName,
  logoURL,
  careerOpportunities,
  compensationAndBenefits,
  count,
  overall,
  workLifeBalance,
}) {
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="ratings-content"
        id="ratings-panel-header"
      >
        <ListItem className={classes.listItem}>
          {
            logoURL
              && (
                <Tooltip
                  className={classes.tooltip}
                  placement="left"
                  title={`Overall Rating for ${companyName}: ${overall}`}
                  aria-label={`Overall Rating for ${companyName}: ${overall}`}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={companyName}
                      src={logoURL}
                      style={{ borderRadius: 0 }}
                    />
                  </ListItemAvatar>
                </Tooltip>
              )
          }
          {
            !logoURL
              && companyName
              && (
                <Tooltip
                  className={classes.tooltip}
                  placement="left"
                  title={`Overall Rating for ${companyName}: ${overall}`}
                  aria-label={`Overall Rating for ${companyName}: ${overall}`}
                >
                  <ListItemAvatar>
                    <Avatar
                      className={classes.avatar}
                      alt={companyName}
                    >
                      {companyName[0]}
                    </Avatar>
                  </ListItemAvatar>
                </Tooltip>
              )
          }
          {
            !logoURL
              && !companyName
              && (
                <Tooltip
                  className={classes.tooltip}
                  placement="left"
                  title={`Overall Rating for ${companyName}: ${overall}`}
                  aria-label={`Overall Rating for ${companyName}: ${overall}`}
                >
                  <ListItemIcon className={classes.primaryContent}>
                    <WorkIcon />
                  </ListItemIcon>
                </Tooltip>
              )
          }
          <Rating>
            { overall }
          </Rating>
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <Tooltip
              className={classes.tooltip}
              placement="left"
              title={`Compensation & Benefits: ${compensationAndBenefits}`}
              aria-label={`Compensation & Benefits: ${compensationAndBenefits}`}
            >
              <ListItemIcon className={classes.primaryContent}>
                <AttachMoneyIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating>
              { compensationAndBenefits }
            </Rating>
          </ListItem>
          <ListItem>
            <Tooltip
              className={classes.tooltip}
              placement="left"
              title={`Career Opportunities: ${careerOpportunities}`}
              aria-label={`Career Opportunities : ${careerOpportunities}`}
            >
              <ListItemIcon className={classes.primaryContent}>
                <TrendingUpIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating>
              { careerOpportunities }
            </Rating>
          </ListItem>
          <ListItem>
            <Tooltip
              className={classes.tooltip}
              placement="left"
              title={`Work/Life Balance: ${workLifeBalance}`}
              aria-label={`Work/Life Balance: ${workLifeBalance}`}
            >
              <ListItemIcon className={classes.primaryContent}>
                <DirectionsBikeIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating>
              { workLifeBalance }
            </Rating>
          </ListItem>
          <ListItem>
            <Tooltip
              className={classes.tooltip}
              placement="left"
              title="Number of Reviews"
              aria-label="Number of Reviews"
            >
              <ListItemIcon className={classes.primaryContent}>
                <PollIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>
              {`${Number(count).toLocaleString()} reviews`}
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
  careerOpportunities: PropTypes.number,
  compensationAndBenefits: PropTypes.number,
  workLifeBalance: PropTypes.number,
  overall: PropTypes.number,
  count: PropTypes.number,
};

Ratings.defaultProps = {
  companyName: '',
  logoURL: null,
  careerOpportunities: null,
  compensationAndBenefits: null,
  workLifeBalance: null,
  overall: null,
  count: null,
};

export default Ratings;
