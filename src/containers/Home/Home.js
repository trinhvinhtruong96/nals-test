import React, { Fragment, useEffect, useState } from 'react';
import * as blogAction from "../../stores/actions/blogs";
import { connect } from 'react-redux';
import BlogItems from '../../components/Blogs/BlogItems/BlogItems';
import SearchSortHeader from '../../components/UI/SearchSortHeader/SearchSortHeader';
import { useLocation } from 'react-router-dom';
import * as QueryString from "query-string";

const defaultArticleCondition = {
    search: null
}

const Home = (props) => {

    const [articleCondition, setArticleCondition] = useState(defaultArticleCondition);
    const location = useLocation();

    useEffect(() => {
        props.onGetBlogs(articleCondition);
    }, [])

    useEffect(() => {
        const newArticleCondition = {
            ...defaultArticleCondition,
            ...QueryString.parse(location.search)
        }
        setArticleCondition(newArticleCondition);
        props.onGetBlogs(newArticleCondition);
    }, [location.search])

    return (
        <Fragment>
            <div className="container mt-3">
                <div className="mb-3">
                    <SearchSortHeader searchText={articleCondition.search} />
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
