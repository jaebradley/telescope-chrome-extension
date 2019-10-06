import React from 'react';
import MUIAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import {
  makeStyles,
} from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    color: 'white',
    textAlign: 'center',
    fontSize: 'medium',
  },
  closeButton: {
    color: 'white',
  },
});

function AppBar({ onCloseClick }) {
  const classes = useStyles();
  return (
    <MUIAppBar position="static">
      <Toolbar>
        <span
          role="img"
          aria-label="telescope"
        >
          🔭
        </span>
        <Typography
          variant="h5"
          className={classes.title}
        >
          Telescope
        </Typography>
        <IconButton
          className={classes.closeButton}
          onClick={onCloseClick}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </MUIAppBar>
  );
}

AppBar.propTypes = {
  onCloseClick: PropTypes.func,
};

AppBar.defaultProps = {
  onCloseClick: () => {},
};

export default AppBar;
