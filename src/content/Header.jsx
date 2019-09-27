import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
import {
  makeStyles,
} from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  primary: {
    color: theme.palette.primary.main,
  },
  input: {
    border: 'none !important',
    textAlign: 'center',
    color: `${theme.palette.primary.main} !important`,
  },
}));

function Header({
  disableButtons,
  disableInput,
  inputText,
  onPreviousCompanyClick,
  onNextCompanyClick,
  onInputTextChange,
}) {
  const classes = useStyles();

  return (
    <Paper className={classes.header}>
      <IconButton
        className={classes.primary}
        onClick={onPreviousCompanyClick}
        disabled={disableButtons}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Input
        classes={{ input: classes.input }}
        value={inputText}
        disableUnderline
        onChange={onInputTextChange}
        disabled={disableInput}
      />
      <IconButton
        className={classes.primary}
        onClick={onNextCompanyClick}
        disabled={disableButtons}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Paper>
  );
}

Header.propTypes = {
  disableButtons: PropTypes.bool,
  disableInput: PropTypes.bool,
  inputText: PropTypes.string,
  onPreviousCompanyClick: PropTypes.func,
  onNextCompanyClick: PropTypes.func,
  onInputTextChange: PropTypes.func,
};

Header.defaultProps = {
  disableButtons: false,
  disableInput: false,
  inputText: null,
  onPreviousCompanyClick: () => {},
  onNextCompanyClick: () => {},
  onInputTextChange: () => {},
};

export default Header;
