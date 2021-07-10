import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as QueryString from "query-string";

const SearchSortHeader = (props) => {
    const [sortType, setSortType] = useState("Newest");
    const history = useHistory();
    const location = useLocation();

    const handlerSortNewest = () => {
        let searchText = QueryString.parse(location.search).search;
        searchText ? searchText = searchText : searchText = "";
        const searchString = "?search=" + searchText + "&sortBy=createdAt&order=desc";
        const searchPath = location.pathname + searchString
        setSortType("Newest");
        history.push(searchPath);
    }

    const handlerSortOldest = () => {
        let searchText = QueryString.parse(location.search).search;
        searchText ? searchText = searchText : searchText = "";
        const searchString = "?search=" + searchText + "&sortBy=createdAt&order=asc";
        const searchPath = location.pathname + searchString;
        setSortType("Oldest");
        history.push(searchPath);
    }
    
    return (
        <div className="bg-dark text-white p-2 d-flex align-items-center" >
            {props.searchText ? <p className="mr-auto mb-0">Result for <strong>{props.searchText}</strong></p> : <div className="mr-auto"></div>}
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {sortType}
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
