import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
} from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: 40,
  },
});

function UnableToIdentifyCompany({ selectedText }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h4">
        Unable to identify company for selected text:
        {' '}
        {`'${selectedText}'`}
      </Typography>
    </Paper>
  );
}

UnableToIdentifyCompany.propTypes = {
  selectedText: PropTypes.string,
};

UnableToIdentifyCompany.defaultProps = {
  selectedText: null,
};

export default UnableToIdentifyCompany;
