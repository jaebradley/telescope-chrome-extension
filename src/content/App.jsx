import React, {
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import Portal from '@material-ui/core/Portal';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
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
  DEFAULT_DATA,
} from './constants';
import transformEmployer from './data/transformEmployer';
import UnableToIdentifyCompany from './UnableToIdentifyCompany';

const useStyles = makeStyles({
  root: {
    height: 50,
  },
  hidden: {
    display: 'none',
  },
  unableToIdentifyCompany: {
    padding: 40,
  },
});

const isValidResponse = (response) => !!response
  && !!response.data
  && !!response.data.response
  && !!response.data.response.employers
  && !!response.data.response.employers.length;

export default function App() {
  const classes = useStyles();
  const [
    data,
    setData,
  ] = useState(DEFAULT_DATA);
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
    chrome.extension.onMessage.addListener(({ selectionText }) => {
      setSelectedText(selectionText);

      axios
        .get(API_BASE_URL, { params: { search_term: selectionText } })
        .then((response) => {
          if (isValidResponse(response)) {
            const responseData = response.data.response;
            const firstEmployer = responseData.employers[0];
            setData({
              ...transformEmployer(firstEmployer),
              reviewsURL: responseData.attributionURL,
            });
            setAbleToIdentifyCompany(true);
          } else {
            setData(DEFAULT_DATA);
            setAbleToIdentifyCompany(false);
          }
          setOpen(true);
        });
    });
  });

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
        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon />
        </IconButton>
        { !ableToIdentifyCompany && <UnableToIdentifyCompany selectedText={selectedText} /> }
        {
          ableToIdentifyCompany && (
            <>
              <Ratings
                logoURL={data.logoURL}
                companyName={data.name}
                data={data.ratings}
              />
              <LeaderDetails data={data.leader} />
              <FeaturedReview data={data.featuredReview} />
            </>
          )
        }
      </div>
    </Portal>
  );
}
