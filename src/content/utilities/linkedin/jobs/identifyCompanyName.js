import isValidJobPage from './isValidJobPage';
import isValidJobSearchPage from './isValidJobSearchPage';

export default function identifyCompanyName(url) {
  if (isValidJobPage(url)) {
    const companyLink = document.querySelector('a.jobs-top-card__company-url');
    return companyLink.text.trim();
  }

  if (isValidJobSearchPage(url)) {
    const companyLink = document.querySelector('a.jobs-details-top-card__company-url');
    return companyLink.text.trim();
  }

  return null;
}
