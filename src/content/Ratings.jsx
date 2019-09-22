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
import Rating from '@material-ui/lab/Rating';
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

const useStyles = makeStyles({
  listItem: {
    padding: 0,
    alignItems: 'center',
  },
});

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
          <Rating
            value={data.overall}
            precision={0.1}
            readOnly
          />
        </ListItem>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <Tooltip
              title={`Compensation & Benefits: ${data.compensationAndBenefits}`}
              aria-label={`Compensation & Benefits: ${data.compensationAndBenefits}`}
            >
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating
              value={data.compensationAndBenefits}
              precision={0.1}
              readOnly
            />
          </ListItem>
          <ListItem>
            <Tooltip
              title={`Career Opportunities: ${data.careerOpportunities}`}
              aria-label={`Career Opportunities : ${data.careerOpportunities}`}
            >
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating
              value={data.careerOpportunities}
              precision={0.1}
              readOnly
            />
          </ListItem>
          <ListItem>
            <Tooltip
              title={`Work/Life Balance: ${data.workLifeBalance}`}
              aria-label={`Work/Life Balance: ${data.workLifeBalance}`}
            >
              <ListItemIcon>
                <DirectionsBikeIcon />
              </ListItemIcon>
            </Tooltip>
            <Rating
              value={data.workLifeBalance}
              precision={0.1}
              readOnly
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
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
