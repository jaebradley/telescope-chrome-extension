import isValidJobPage from './isValidJobPage';
import isValidJobSearchPage from './isValidJobSearchPage';

export default function shouldIdentifyCompanyName(url) {
  return isValidJobPage(url) || isValidJobSearchPage(url);
}
