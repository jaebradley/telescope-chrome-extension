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
      { children.slice(0, 25) }
      {
        !expanded && (
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
      <span className={classNames({ [classes.visuallyHidden]: !expanded })}>
        { children.slice(25) }
      </span>
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
