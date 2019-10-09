import isValidJobPage from './isValidJobPage';
import isValidJobSearchPage from './isValidJobSearchPage';
import isValidCompanyPage from './isValidCompanyPage';

export default function shouldIdentifyCompanyName(url) {
  return isValidJobPage(url) || isValidJobSearchPage(url) || isValidCompanyPage(url);
}
