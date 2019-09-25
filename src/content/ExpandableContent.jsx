import React, {
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  makeStyles,
} from '@material-ui/styles';

const useStyles = makeStyles({
  visuallyHidden: {
    clip: 'rect(1px, 1px, 1px, 1px)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: 1,
  },
});

function ExpandableContent({ children }) {
  const classes = useStyles();
  const [
    expanded,
    setExpanded,
  ] = useState(false);

  const handleExpandClick = useCallback(() => setExpanded(true), []);

  return (
    <div>
      { /* @jaebradley: move this to a prop in the future, probably */ }
      { children.slice(0, 30) }
      {
        !expanded
          && children.length > 30
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
        children.length > 30 && (
          <span className={classNames({ [classes.visuallyHidden]: !expanded })}>
            { children.slice(30) }
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
