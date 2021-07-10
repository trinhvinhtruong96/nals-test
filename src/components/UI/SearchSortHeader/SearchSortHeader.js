import React, { useState } from 'react';


const SearchSortHeader = (props) => {
    const [sortType, setSortType] = useState("Sort");

    const handlerSortNewest = () => {
        setSortType("Newest");
    }

    const handlerSortOldest = () => {
        setSortType("Oldest");
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
