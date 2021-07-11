import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';

const SearchSortHeader = ({ searchText, order }) => {
  const history = useHistory();
  const location = useLocation();

  const handlerSortNewest = () => {
    let searchParam = QueryString.parse(location.search).search;
    if (!searchParam) searchParam = '';
    const searchString = `?search=${searchParam}&sortBy=createdAt&order=desc`;
    const searchPath = location.pathname + searchString;
    history.push(searchPath);
  };

  const handlerSortOldest = () => {
    let searchParam = QueryString.parse(location.search).search;
    if (!searchParam) searchParam = '';
    const searchString = `?search=${searchParam}&sortBy=createdAt&order=asc`;
    const searchPath = location.pathname + searchString;
    history.push(searchPath);
  };

  const wordBreakStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  return (
    <div className="bg-dark text-white p-2 d-flex align-items-center">
      {searchText ? (
        <p className="mr-auto mb-0" style={wordBreakStyle}>
          Result for
          <strong>{` ${searchText}`}</strong>
        </p>
      ) : <div className="mr-auto" />}
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {order === 'desc' ? 'Newest' : (order === 'asc' ? 'Oldest' : 'Sort')}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item" onClick={handlerSortNewest}>Newest</p>
          <p className="dropdown-item" onClick={handlerSortOldest}>Oldest</p>
        </div>
      </div>
    </div>
  );
};

SearchSortHeader.propTypes = {
  order: PropTypes.string,
  searchText: PropTypes.string,
};

export default SearchSortHeader;
