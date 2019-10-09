import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import Portal from '@material-ui/core/Portal';
import {
  makeStyles,
} from '@material-ui/styles';
import classnames from 'classnames';
import { useDebouncedCallback } from 'use-debounce';

import Content from './Content';
import {
  APP_ELEMENT_ID,
} from './constants';
import UnableToIdentifyCompany from './UnableToIdentifyCompany';
import useCompanySearch from './hooks/useCompanySearch';
import AppBar from './AppBar';
import Header from './Header';
import Loader from './Loader';
import identifySubdomain from './utilities/identifySubdomain';
import identifyCompanyNameOnLinkedIn from '../utilities/linkedin/jobs/identifyCompanyName';
import identifyCompanyNameOnIndeed from '../utilities/indeed/jobs/identifyCompanyName';
import shouldIdentifyCompanyNameOnLinkedIn from '../utilities/linkedin/jobs/shouldIdentifyCompanyName';
import shouldIdentifyCompanyNameOnIndeed from '../utilities/indeed/jobs/shouldIdentifyCompanyName';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 50,
  },
  hidden: {
    display: 'none',
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

  const {
    search,
    companies,
    currentCompanyIndex,
    searching,
    setCurrentCompanyIndex,
  } = useCompanySearch();

  const handleSearch = (term) => search(
    term,
    ({ nextCompanies, nextCurrentCompanyIndex }) => {
      if (nextCompanies && nextCompanies[nextCurrentCompanyIndex]) {
        setInputText(nextCompanies[nextCurrentCompanyIndex].name);
      }
    },
  );

  useEffect(() => {
    function handleSelectedSearchTerm({ selectionText }) {
      if (!open) {
        setOpen(true);
      }

      let searchTerm = selectionText;

      if (shouldIdentifyCompanyNameOnLinkedIn(document.URL)) {
        searchTerm = identifyCompanyNameOnLinkedIn(document.URL);
      }

      if (shouldIdentifyCompanyNameOnIndeed(document.URL)) {
        searchTerm = identifyCompanyNameOnIndeed(document.URL);
      }

      if (!searchTerm) {
        searchTerm = identifySubdomain(document.URL);
      }

      setInputText(searchTerm);
      handleSearch(searchTerm);
    }

    chrome.extension.onMessage.addListener(handleSelectedSearchTerm);
    return () => chrome.extension.onMessage.removeListener(handleSelectedSearchTerm);
  });

  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  const [debouncedInputChangeHandler] = useDebouncedCallback(handleSearch, 500);
  const handleInputHeaderTextChange = useCallback((e) => {
    setInputText(e.target.value);
    debouncedInputChangeHandler(e.target.value);
  }, [setInputText, debouncedInputChangeHandler]);

  const handleViewingPreviousCompany = useCallback(() => {
    const isFirstCompany = currentCompanyIndex <= 0;
    const nextCompanyIndex = isFirstCompany ? companies.length - 1 : currentCompanyIndex - 1;

    setCurrentCompanyIndex(nextCompanyIndex);
    setInputText(companies[nextCompanyIndex].name);
  }, [currentCompanyIndex, companies]);

  const handleViewingNextCompany = useCallback(() => {
    const isLastCompany = currentCompanyIndex >= companies.length - 1;
    const nextCompanyIndex = isLastCompany ? 0 : currentCompanyIndex + 1;

    setCurrentCompanyIndex(nextCompanyIndex);
    setInputText(companies[nextCompanyIndex].name);
  }, [currentCompanyIndex, companies]);

  const hasCurrentCompany = companies && companies.length && companies[currentCompanyIndex];
  const currentCompany = hasCurrentCompany ? companies[currentCompanyIndex] : null;

  return (
    <Portal container={document.getElementById(APP_ELEMENT_ID)}>
      <div className={classnames(classes.root, { [classes.hidden]: !open })}>
        <AppBar onCloseClick={handleClose} />
        <Header
          disableButtons={!companies || companies.length <= 1}
          disableInput={searching}
          inputText={inputText}
          onPreviousCompanyClick={handleViewingPreviousCompany}
          onNextCompanyClick={handleViewingNextCompany}
          onInputTextChange={handleInputHeaderTextChange}
        />
        { !searching && !currentCompany && <UnableToIdentifyCompany /> }
        { searching && <Loader /> }
        {
          !searching
            && currentCompany
            && (
              <Content
                companyName={currentCompany.name}
                logoURL={currentCompany.logoURL}
                ratings={currentCompany.ratings}
                leader={currentCompany.leader}
                featuredReview={currentCompany.featuredReview}
              />
            )
        }
      </div>
    </Portal>
  );
}
