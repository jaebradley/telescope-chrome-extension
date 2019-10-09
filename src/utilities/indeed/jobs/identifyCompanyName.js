import isValidJobSearchPage from './isValidJobSearchPage';
import isValidJobPage from './isValidJobPage';
import isValidCompanyPage from './isValidCompanyPage';

export default function identifyCompanyName(url) {
  if (isValidJobSearchPage(url)) {
    // On the job search page, the company name span sometimes has a child link (and sometimes it doesn't)
    // So safer to check text content of the span itself
    const companyNameContainer = document.querySelector('span[id="vjs-cn"]');
    if (companyNameContainer) {
      return companyNameContainer.textContent.trim();
    }
  }

  if (isValidJobPage(url)) {
    const companyNameContainer = document.querySelector('div.icl-u-lg-mr--sm');
    if (companyNameContainer) {
      return companyNameContainer.textContent.trim();
    }
  }

  if (isValidCompanyPage(url)) {
    const companyNameContainer = document.querySelector('div.cmp-CompanyName');
    if (companyNameContainer) {
      return companyNameContainer.textContent.trim();
    }
  }

  return null;
}
