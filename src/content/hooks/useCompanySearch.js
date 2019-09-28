import {
  useState,
  useCallback,
} from 'react';
import axios from 'axios';

import transformEmployer from '../data/transformEmployer';

const isValidResponse = (response) => !!response
  && !!response.data
  && !!response.data.response
  && !!response.data.response.employers
  && !!response.data.response.employers.length;

export default function useCompanySearch() {
  const [
    searching,
    setSearching,
  ] = useState(false);

  const [
    searchTerm,
    setSearchTerm,
  ] = useState(null);

  const [
    companies,
    setCompanies,
  ] = useState([]);

  const [
    currentCompanyIndex,
    setCurrentCompanyIndex,
  ] = useState(null);

  const search = useCallback((term, callback = () => {}) => {
    setSearching(true);
    setSearchTerm(term);

    let nextCompanies = [];
    let nextCurrentCompanyIndex = null;

    console.log('process env api base url', process.env.API_BASE_URL);

    axios
      .get(`${process.env.API_BASE_URL}/employers`, { params: { search_term: term } })
      .then((response) => {
        if (isValidResponse(response)) {
          nextCompanies = response.data.response.employers.slice(0, 5).map(transformEmployer);
          nextCurrentCompanyIndex = 0;
        }
      }).finally(() => {
        setCompanies(nextCompanies);
        setCurrentCompanyIndex(nextCurrentCompanyIndex);
        setSearching(false);
        callback({
          nextCompanies,
          nextCurrentCompanyIndex,
        });
      });
  }, []);

  return {
    search,
    companies,
    currentCompanyIndex,
    searching,
    searchTerm,
    setCompanies,
    setCurrentCompanyIndex,
    setSearching,
    setSearchTerm,
  };
}
