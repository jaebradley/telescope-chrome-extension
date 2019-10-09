import isValidJobPage from './isValidJobPage';
import isValidJobSearchPage from './isValidJobSearchPage';
import isValidCompanyPage from './isValidCompanyPage';
import isValidProfilePage from './isValidProfilePage';

export default function shouldIdentifyCompanyName(url) {
  return isValidJobPage(url) || isValidJobSearchPage(url) || isValidCompanyPage(url) || isValidProfilePage(url);
}
