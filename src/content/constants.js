const API_BASE_URL = 'https://telescope-chrome-extension.herokuapp.com/employers';
const APP_ELEMENT_ID = 'telescope';
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

export {
  API_BASE_URL,
  APP_ELEMENT_ID,
  DEFAULT_DATA,
};
