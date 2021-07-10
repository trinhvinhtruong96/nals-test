import React, { Fragment, useEffect, useState } from 'react';
import * as blogAction from "../../stores/actions/blogs";
import { connect } from 'react-redux';
import BlogItems from '../../components/Blogs/BlogItems/BlogItems';
import SearchSortHeader from '../../components/UI/SearchSortHeader/SearchSortHeader';
import { useLocation } from 'react-router-dom';
import * as QueryString from "query-string";

const Home = (props) => {

    const [articleCondition, setArticleCondition] = useState({
        search: null,
        sortBy: null,
        order: "asc"
    });
    const location = useLocation();

    useEffect(() => {
        props.onGetBlogs();
        console.log("Mount");
    }, [])

    useEffect(() => {
        console.log("search change");
        const newArticleCondition = {
            ...articleCondition,
            search: QueryString.parse(location.search).search,
            sortBy: QueryString.parse(location.search).sortBy,
            order: QueryString.parse(location.search).order,
        }
        setArticleCondition(newArticleCondition);
        props.onGetBlogs(newArticleCondition);
    }, [location.search])

    return (
        <Fragment>
            <div className="container mt-3">
                <div className="mb-3">
                    <SearchSortHeader searchText={articleCondition.search} order={articleCondition.order} />
                </div>
                <BlogItems items={props.blogs} />
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        blogs: state.blogs.list
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetBlogs: (condition) => dispatch(blogAction.getBlogsStart(condition)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
