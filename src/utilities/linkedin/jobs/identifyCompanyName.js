import isValidJobPage from './isValidJobPage';
import isValidJobSearchPage from './isValidJobSearchPage';
import isValidCompanyPage from './isValidCompanyPage';

export default function identifyCompanyName(url) {
  if (isValidJobPage(url)) {
    const companyLink = document.querySelector('a.jobs-top-card__company-url');
    return companyLink.text.trim();
  }

  if (isValidJobSearchPage(url)) {
    const companyLink = document.querySelector('a.jobs-details-top-card__company-url');
    return companyLink.text.trim();
  }

  if (isValidCompanyPage(url)) {
    const companyTitleHeader = document.querySelector('h1.org-top-card-summary__title');
    if (companyTitleHeader) {
      return companyTitleHeader.textContent.trim();
    }
  }

  return null;
}
