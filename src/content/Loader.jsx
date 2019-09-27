import React from 'react';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  makeStyles,
} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Loader() {
  const classes = useStyles();

  return (
    <Paper classes={{ root: classes.root }}>
      <CircularProgress />
    </Paper>
  );
}
