export default function transformEmployer(data) {
  return {
    name: data.name,
    industryName: data.industryName,
    logoURL: data.squareLogo,
    websiteURL: data.website,
    reviewsURL: data.attributionURL,
    ratings: {
      careerOpportunities: data.careerOpportunitiesRating,
      compensationAndBenefits: data.compensationAndBenefitsRating,
      workLifeBalance: data.workLifeBalanceRating,
      overall: data.overallRating,
      seniorLeadership: data.seniorLeadershipRating,
      count: data.numberOfRatings,
      description: data.ratingDescription,
    },
    leader: data.ceo && {
      title: data.ceo.title,
      name: data.ceo.name,
      ratingsCount: data.ceo.numberOfRatings,
      approvalPercentage: data.ceo.pctApprove,
      disapprovalPercentage: data.ceo.pctDisapprove,
      image: data.ceo.image && {
        url: data.ceo.image.src,
        height: data.ceo.image.height,
        width: data.ceo.image.width,
      },
    },
    featuredReview: data.featuredReview && {
      url: data.featuredReview.attributionURL,
      consDescription: data.featuredReview.cons,
      prosDescription: data.featuredReview.pros,
      jobTitle: data.featuredReview.jobTitle,
      headline: data.featuredReview.headline,
      reviewDateTime: data.featuredReview.reviewDateTime,
      location: data.featuredReview.location,
      overallRating: data.featuredReview.overall,
    },
  };
}
