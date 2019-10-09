import isValidJobPage from './isValidJobPage';
import isValidJobSearchPage from './isValidJobSearchPage';
import isValidCompanyPage from './isValidCompanyPage';
import isValidProfilePage from './isValidProfilePage';

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

  if (isValidProfilePage(url)) {
    let companyNameContainer = document.querySelector('li[data-control-name="position_see_more"]');
    if (companyNameContainer) {
      return companyNameContainer.textContent.trim();
    }

    companyNameContainer = document.querySelector(
      'a[data-control-name="background_details_company"] > div.pv-entity__summary-info > p.pv-entity__secondary-title',
    );
    if (companyNameContainer) {
      return companyNameContainer.textContent.trim();
    }

    companyNameContainer = document.querySelector(
      'a[data-control-name="background_details_company"] > div.pv-entity__summary-info > p > span:not(.visually-hidden)',
    );
    if (companyNameContainer) {
      return companyNameContainer.textContent.trim();
    }

    companyNameContainer = document.querySelector(
      'a[data-control-name="background_details_company"] > div.pv-entity__company-summary-info > h3 > span:not(.visually-hidden)',
    );
    if (companyNameContainer) {
      return companyNameContainer.textContent.trim();
    }
  }

  return null;
}
