import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as QueryString from 'query-string';
import * as blogAction from '../../stores/actions/blogs';
import BlogItems from '../../components/Blogs/BlogItems/BlogItems';
import SearchSortHeader from '../../components/UI/SearchSortHeader/SearchSortHeader';

const Home = ({ onGetBlogs, blogs }) => {
  const [articleCondition, setArticleCondition] = useState({
    search: null,
    sortBy: null,
    order: 'asc',
  });

  const location = useLocation();

  useEffect(() => {
    onGetBlogs();
  }, []);

  useEffect(() => {
    const newArticleCondition = {
      ...articleCondition,
      search: QueryString.parse(location.search).search,
      sortBy: QueryString.parse(location.search).sortBy,
      order: QueryString.parse(location.search).order,
    };
    setArticleCondition(newArticleCondition);
    onGetBlogs(newArticleCondition);
  }, [location.search]);

  return (
    <>
      <div className="mt-3">
        <div className="mb-3">
          <SearchSortHeader searchText={articleCondition.search} order={articleCondition.order} />
        </div>
        <BlogItems items={blogs} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  blogs: state.blogs.list,
});

const mapDispatchToProps = dispatch => ({
  onGetBlogs: (condition) => dispatch(blogAction.getBlogsStart(condition)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
