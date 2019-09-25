import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import axios from 'axios';
import Portal from '@material-ui/core/Portal';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  makeStyles,
} from '@material-ui/styles';
import classnames from 'classnames';

import LeaderDetails from './LeaderDetails';
import FeaturedReview from './FeaturedReview';
import Ratings from './Ratings';
import {
  API_BASE_URL,
  APP_ELEMENT_ID,
} from './constants';
import transformEmployer from './data/transformEmployer';
import UnableToIdentifyCompany from './UnableToIdentifyCompany';

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
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  primary: {
    color: theme.palette.primary.main,
  },
  loader: {
    display: 'flex',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const isValidResponse = (response) => !!response
  && !!response.data
  && !!response.data.response
  && !!response.data.response.employers
  && !!response.data.response.employers.length;

export default function App() {
  const classes = useStyles();
  const [
    isLoading,
    setIsLoading,
  ] = useState(true);
  const [
    currentCompanyIndex,
    setCurrentCompanyIndex,
  ] = useState(null);
  const [
    companies,
    setCompanies,
  ] = useState([]);
  const [
    open,
    setOpen,
  ] = useState(false);
  const [
    ableToIdentifyCompany,
    setAbleToIdentifyCompany,
  ] = useState(false);
  const [
    selectedText,
    setSelectedText,
  ] = useState('');

  const anchorEl = document.getElementById(APP_ELEMENT_ID);

  useEffect(() => {
    const handleSelectedText = (text) => {
      setIsLoading(true);
      setSelectedText(text);

      axios
        .get(API_BASE_URL, { params: { search_term: text } })
        .then((response) => {
          if (isValidResponse(response)) {
            const responseData = response.data.response;
            setCompanies(responseData.employers.slice(0, 5).map(transformEmployer));
            setCurrentCompanyIndex(0);
            setAbleToIdentifyCompany(true);
          } else {
            setCompanies([]);
            setCurrentCompanyIndex(null);
            setAbleToIdentifyCompany(false);
          }
          setIsLoading(false);
          setOpen(true);
        }).catch(() => {
          setCompanies([]);
          setCurrentCompanyIndex(null);
          setAbleToIdentifyCompany(false);
          setIsLoading(false);
          setOpen(true);
        });
    };

    chrome.extension.onMessage.addListener(({ selectionText }) => handleSelectedText(selectionText));
    return chrome.extension.onMessage.removeListener(handleSelectedText);
  }, []);

  const handleViewingPreviousCompany = useCallback(() => {
    if (currentCompanyIndex <= 0) {
      setCurrentCompanyIndex(companies.length - 1);
    } else {
      setCurrentCompanyIndex(currentCompanyIndex - 1);
    }
  }, [currentCompanyIndex, companies]);

  const handleViewingNextCompany = useCallback(() => {
    if (currentCompanyIndex >= companies.length - 1) {
      setCurrentCompanyIndex(0);
    } else {
      setCurrentCompanyIndex(currentCompanyIndex + 1);
    }
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
          isLoading && (
            <Paper className={classes.header} classes={{ root: classes.loader }}>
              <CircularProgress />
            </Paper>
          )
        }
        { !isLoading && !ableToIdentifyCompany && <UnableToIdentifyCompany selectedText={selectedText} /> }
        {
          !isLoading && ableToIdentifyCompany && (
            <>
              <Paper className={classes.header}>
                <IconButton
                  className={classes.primary}
                  onClick={handleViewingPreviousCompany}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <Typography
                  className={classes.primary}
                  variant="h6"
                >
                  {companies[currentCompanyIndex].name}
                </Typography>
                <IconButton
                  className={classes.primary}
                  onClick={handleViewingNextCompany}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Paper>
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
