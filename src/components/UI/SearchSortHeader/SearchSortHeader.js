import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';

const SearchSortHeader = (props) => {
  const history = useHistory();
  const location = useLocation();

  const handlerSortNewest = () => {
    let searchText = QueryString.parse(location.search).search;
    if (!searchText) searchText = '';
    const searchString = `?search=${searchText}&sortBy=createdAt&order=desc`;
    const searchPath = location.pathname + searchString;
    history.push(searchPath);
  };

  const handlerSortOldest = () => {
    let searchText = QueryString.parse(location.search).search;
    if (!searchText) searchText = '';
    const searchString = `?search=${searchText}&sortBy=createdAt&order=asc`;
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
      {props.searchText ? (
        <p className="mr-auto mb-0" style={wordBreakStyle}>
          Result for
          <strong>{` ${props.searchText}`}</strong>
        </p>
      ) : <div className="mr-auto" />}
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {props.order === 'desc' ? 'Newest' : (props.order === 'asc' ? 'Oldest' : 'Sort')}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <p className="dropdown-item" onClick={handlerSortNewest}>Newest</p>
          <p className="dropdown-item" onClick={handlerSortOldest}>Oldest</p>
        </div>
      </div>
    </div>
  );
};

export default SearchSortHeader;
