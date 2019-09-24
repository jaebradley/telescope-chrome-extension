import React from 'react';
import MUIRating from '@material-ui/lab/Rating';
import {
  makeStyles,
} from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

function Rating({ children }) {
  const classes = useStyles();

  return (
    <MUIRating
      classes={{ root: classes.root }}
      value={children}
      precision={0.1}
      readOnly
    />
  );
}

Rating.propTypes = {
  children: PropTypes.number.isRequired,
};

export default Rating;
