import React, {
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  makeStyles,
} from '@material-ui/styles';

const MAX_DISPLAYABLE_CONTENT_LENGTH = 35;

const useStyles = makeStyles({
  visuallyHidden: {
    clip: 'rect(1px, 1px, 1px, 1px)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
  },
  content: {
    overflow: 'auto',
    maxHeight: 80,
  },
});

function ExpandableContent({ children }) {
  const classes = useStyles();
  const [
    expanded,
    setExpanded,
  ] = useState(false);

  const handleExpandClick = useCallback(() => setExpanded(true), []);
  const expandable = children.length > MAX_DISPLAYABLE_CONTENT_LENGTH;

  return (
    <div className={classes.content}>
      { /* @jaebradley: move this to a prop in the future, probably */ }
      { children.slice(0, MAX_DISPLAYABLE_CONTENT_LENGTH) }
      {
        !expanded
          && expandable
          && (
            <button
              type="button"
              onClick={handleExpandClick}
              onKeyDown={handleExpandClick}
              tabIndex={-1}
            >
              ...
            </button>
          )
      }
      {
        expandable && (
          <span className={classNames({ [classes.visuallyHidden]: !expanded })}>
            { children.slice(MAX_DISPLAYABLE_CONTENT_LENGTH) }
          </span>
        )
      }
    </div>
  );
}

ExpandableContent.propTypes = {
  children: PropTypes.string,
};

ExpandableContent.defaultProps = {
  children: '',
};

export default ExpandableContent;
