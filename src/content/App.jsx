import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import Portal from '@material-ui/core/Portal';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles,
} from '@material-ui/styles';
import classnames from 'classnames';
import { useDebouncedCallback } from 'use-debounce';

import LeaderDetails from './LeaderDetails';
import FeaturedReview from './FeaturedReview';
import Ratings from './Ratings';
import {
  APP_ELEMENT_ID,
} from './constants';
import UnableToIdentifyCompany from './UnableToIdentifyCompany';
import useCompanySearch from './hooks/useCompanySearch';
import Header from './Header';
import Loader from './Loader';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 50,
  },
  hidden: {
    display: 'none',
  },
  unableToIdentifyCompany: {
    padding: 40,
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textAlign: 'center',
  },
  closeButton: {
    color: 'white',
  },
  primary: {
    color: theme.palette.primary.main,
  },
}));

export default function App() {
  const classes = useStyles();
  const [
    open,
    setOpen,
  ] = useState(false);
  const [
    inputText,
    setInputText,
  ] = useState('');

  const anchorEl = document.getElementById(APP_ELEMENT_ID);

  const {
    search,
    companies,
    currentCompanyIndex,
    searching,
    setCurrentCompanyIndex,
  } = useCompanySearch();

  useEffect(() => {
    function handleSelectedSearchTerm({ selectionText }) {
      if (!open) {
        setOpen(true);
      }

      setInputText(selectionText);
      search(selectionText, ({ nextCompanies, nextCurrentCompanyIndex }) => {
        if (nextCompanies && nextCompanies[nextCurrentCompanyIndex]) {
          setInputText(nextCompanies[nextCurrentCompanyIndex].name);
        }
      });
    }

    chrome.extension.onMessage.addListener(handleSelectedSearchTerm);
    return () => chrome.extension.onMessage.removeListener(handleSelectedSearchTerm);
  });

  const [
    debouncedInputChangeHandler,
  ] = useDebouncedCallback((term) => search(term, ({ nextCompanies, nextCurrentCompanyIndex }) => {
    if (nextCompanies && nextCompanies[nextCurrentCompanyIndex]) {
      setInputText(nextCompanies[nextCurrentCompanyIndex].name);
    }
  }), 500);

  const handleViewingPreviousCompany = useCallback(() => {
    const nextCompanyIndex = currentCompanyIndex <= 0
      ? companies.length - 1
      : currentCompanyIndex - 1;

    setCurrentCompanyIndex(nextCompanyIndex);
    setInputText(companies[nextCompanyIndex].name);
  }, [currentCompanyIndex, companies]);

  const handleViewingNextCompany = useCallback(() => {
    const nextCompanyIndex = currentCompanyIndex >= companies.length - 1
      ? 0
      : currentCompanyIndex + 1;

    setCurrentCompanyIndex(nextCompanyIndex);
    setInputText(companies[nextCompanyIndex].name);
  }, [currentCompanyIndex, companies]);

  return (
    <Portal
      container={anchorEl}
    >
      <div
        className={
          classnames(
            classes.root,
            {
              [classes.hidden]: !open,
            },
          )
        }
      >
        <AppBar position="static">
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
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {
          <Header
            disableButtons={!companies || companies.length <= 1}
            disableInput={searching}
            inputText={inputText}
            onPreviousCompanyClick={handleViewingPreviousCompany}
            onNextCompanyClick={handleViewingNextCompany}
            onInputTextChange={(e) => {
              setInputText(e.target.value);
              debouncedInputChangeHandler(e.target.value);
            }}
          />
        }
        { !searching && !companies.length && <UnableToIdentifyCompany /> }
        {
          searching && <Loader />
        }
        {
          !searching
            && companies.length
            && (
              <>
                <Ratings
                  logoURL={companies[currentCompanyIndex].logoURL}
                  companyName={companies[currentCompanyIndex].name}
                  data={companies[currentCompanyIndex].ratings}
                />
                {
                  companies[currentCompanyIndex].leader && <LeaderDetails data={companies[currentCompanyIndex].leader} />
                }
                {
                  companies[currentCompanyIndex].featuredReview && <FeaturedReview data={companies[currentCompanyIndex].featuredReview} />
                }
              </>
            )
        }
      </div>
    </Portal>
  );
}
