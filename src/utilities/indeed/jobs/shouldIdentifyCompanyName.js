import isValidJobSearchPage from './isValidJobSearchPage';
import isValidCompanyPage from './isValidCompanyPage';
import isValidJobPage from './isValidJobPage';

export default function shouldIdentifyCompanyName(url) {
  return isValidJobSearchPage(url) || isValidCompanyPage(url) || isValidJobPage(url);
}
