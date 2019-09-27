import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {
  makeStyles,
} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: 40,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function UnableToIdentifyCompany() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <ErrorOutlineIcon />
      <Typography variant="h6" color="error">
        Unable to identify company
      </Typography>
    </Paper>
  );
}
