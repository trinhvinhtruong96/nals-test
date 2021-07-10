import React, { Fragment, useState } from 'react';
import { useHistory } from 'react-router';
import { pathRoute } from '../../../router/router';

const Header = (props) => {
    const [searchText, setSearchText] = useState("");
    const history = useHistory();
    const inputSearchChangeHandler = (event) => {
        setSearchText(event.target.value);
    }
    const searchHandler = (e) => {
        e.preventDefault();
        console.log("searchHandler");
        const searchString = searchText ? "?search=" + searchText : "";
        const searchPath = pathRoute.home + searchString;
        setSearchText("");
        history.push(searchPath);
    }
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <p className="navbar-brand mb-0" style={{ cursor: "pointer" }} onClick={() => history.push(pathRoute.home)}>Navbar</p>
                <form className="form-inline" style={{ width: "40%" }}>
                    <input
                        className="form-control mr-2 col-10"
                        value={searchText}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={inputSearchChangeHandler}
                        onKeyPress={(event) => { if (event.key === "Enter") searchHandler(event); }}
                    />
                    <button className="btn btn-outline-info my-2 my-sm-0" onClick={searchHandler}>Search</button>
                </form>
                <div></div>
            </nav>
            <div style={{ height: "56px" }}></div>
        </Fragment>
    );
};

export default Header;
