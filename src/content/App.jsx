import React, {
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
// import Popover from '@material-ui/core/Popover';
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

const useStyles = makeStyles({
  root: {
    height: 50,
  },
  hidden: {
    display: 'none',
  },
});

const DEFAULT_DATA = {
  name: '',
  industryName: '',
  logoURL: null,
  websiteURL: null,
  reviewsURL: null,
  ratings: {
    careerOpportunities: null,
    compensationAndBenefits: null,
    workLifeBalance: null,
    overall: null,
    seniorLeadership: null,
    count: null,
    description: '',
  },
  leader: {
    name: '',
    ratingsCount: null,
    approvalPercentage: null,
    disapprovalPercentage: null,
    title: '',
    image: {
      url: null,
      height: null,
      width: null,
    },
  },
  featuredReview: {
    url: null,
    consDescription: '',
    prosDescription: '',
    jobTitle: '',
    headline: '',
    reviewDateTime: null,
    location: null,
    overallRating: null,
  },
};

export default function SimplePopover() {
  const classes = useStyles();
  const [
    data,
    setData,
  ] = useState(DEFAULT_DATA);
  const [
    open,
    setOpen,
  ] = useState(false);
  const anchorEl = document.getElementById('telescope');

  useEffect(() => {
    chrome.extension.onMessage.addListener(({ selectionText }) => {
      axios.get('https://telescope-chrome-extension.herokuapp.com/employers', {
        params: {
          search_term: selectionText,
        },
      }).then((response) => {
        const responseData = response.data.response;
        const firstEmployer = responseData.employers[0];
        setData({
          name: firstEmployer.name,
          industryName: firstEmployer.industryName,
          logoURL: firstEmployer.squareLogo,
          websiteURL: firstEmployer.website,
          reviewsURL: responseData.attributionURL,
          ratings: {
            careerOpportunities: firstEmployer.careerOpportunitiesRating,
            compensationAndBenefits: firstEmployer.compensationAndBenefitsRating,
            workLifeBalance: firstEmployer.workLifeBalanceRating,
            overall: firstEmployer.overallRating,
            seniorLeadership: firstEmployer.seniorLeadershipRating,
            count: firstEmployer.numberOfRatings,
            description: firstEmployer.ratingDescription,
          },
          leader: {
            title: firstEmployer.ceo.title,
            name: firstEmployer.ceo.name,
            ratingsCount: firstEmployer.ceo.numberOfRatings,
            approvalPercentage: firstEmployer.ceo.pctApprove,
            disapprovalPercentage: firstEmployer.ceo.pctDisapprove,
            image: {
              url: firstEmployer.ceo.image.src,
              height: firstEmployer.ceo.image.height,
              width: firstEmployer.ceo.image.width,
            },
          },
          featuredReview: {
            url: firstEmployer.featuredReview.attributionURL,
            consDescription: firstEmployer.featuredReview.cons,
            prosDescription: firstEmployer.featuredReview.pros,
            jobTitle: firstEmployer.featuredReview.jobTitle,
            headline: firstEmployer.featuredReview.headline,
            reviewDateTime: firstEmployer.featuredReview.reviewDateTime,
            location: firstEmployer.featuredReview.location,
            overallRating: firstEmployer.featuredReview.overall,
          },
        });
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
        <Ratings
          logoURL={data.logoURL}
          companyName={data.name}
          data={data.ratings}
        />
        <LeaderDetails data={data.leader} />
        <FeaturedReview data={data.featuredReview} />
      </div>
    </Portal>
  );
}
