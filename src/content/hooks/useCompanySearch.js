import {
  useState,
  useCallback,
} from 'react';
import axios from 'axios';

import { API_BASE_URL } from '../constants';
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

  const search = useCallback((term) => {
    setSearching(true);
    setSearchTerm(term);

    axios
      .get(API_BASE_URL, { params: { search_term: term } })
      .then((response) => {
        if (isValidResponse(response)) {
          const responseData = response.data.response;
          setCompanies(responseData.employers.slice(0, 5).map(transformEmployer));
          setCurrentCompanyIndex(0);
        } else {
          setCompanies([]);
          setCurrentCompanyIndex(null);
        }
      }).catch(() => {
        setCompanies([]);
        setCurrentCompanyIndex(null);
      }).finally(() => {
        setSearching(false);
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
