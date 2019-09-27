import React from 'react';
import PropTypes from 'prop-types';

import LeaderDetails from './LeaderDetails';
import FeaturedReview from './FeaturedReview';
import Ratings from './Ratings';

function Content({
  logoURL,
  companyName,
  ratings,
  leader,
  featuredReview,
}) {
  return (
    <>
      <Ratings
        logoURL={logoURL}
        companyName={companyName}
        careerOpportunities={ratings.careerOpportunities}
        compensationAndBenefits={ratings.compensationAndBenefits}
        workLifeBalance={ratings.workLifeBalance}
        overall={ratings.overall}
        count={ratings.count}
      />
      {
        leader
          && (
            <LeaderDetails
              title={leader.title}
              name={leader.name}
              ratingsCount={leader.ratingsCount}
              approvalPercentage={leader.approvalPercentage}
              disapprovalPercentage={leader.disapprovalPercentage}
              image={leader.image}
            />
          )
      }
      {
        featuredReview
          && (
            <FeaturedReview
              headline={featuredReview.headline}
              cons={featuredReview.consDescription}
              pros={featuredReview.prosDescription}
              jobTitle={featuredReview.jobTitle}
              overallRating={featuredReview.overallRating}
              location={featuredReview.location}
            />
          )
      }
    </>
  );
}

Content.propTypes = {
  companyName: PropTypes.string,
  logoURL: PropTypes.string,
  ratings: PropTypes.shape({
    careerOpportunities: PropTypes.number,
    compensationAndBenefits: PropTypes.number,
    workLifeBalance: PropTypes.number,
    overall: PropTypes.number,
    count: PropTypes.number,
  }),
  leader: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    approvalPercentage: PropTypes.number,
    disapprovalPercentage: PropTypes.number,
    ratingsCount: PropTypes.number,
  }),
  featuredReview: PropTypes.shape({
    headline: PropTypes.string,
    prosDescription: PropTypes.string,
    consDescription: PropTypes.string,
    jobTitle: PropTypes.string,
    overallRating: PropTypes.number,
    location: PropTypes.string,
  }),
};

Content.defaultProps = {
  companyName: '',
  logoURL: null,
  ratings: {
    careerOpportunities: null,
    compensationAndBenefits: null,
    workLifeBalance: null,
    overall: null,
    count: null,
  },
  leader: {
    name: '',
    title: '',
    image: {
      url: null,
    },
    approvalPercentage: null,
    disapprovalPercentage: null,
    ratingsCount: null,
  },
  featuredReview: {
    headline: '',
    prosDescription: '',
    consDescription: '',
    jobTitle: '',
    overallRating: null,
    location: '',
  },
};

export default Content;
