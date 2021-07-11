import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatDay } from '../../shared/utility';
import * as blogAction from '../../stores/actions/blogs';

const Detail = ({
  article,
  onGetArticleDetail,
}) => {
  const params = useParams();

  useEffect(() => {
    onGetArticleDetail(params.id);
  }, []);
  return (
    <>
      {
        article ? (
          <div className="card mb-3 mt-4">
            <img src={article.image} className="card-img-top" alt={article.title} />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.content}</p>
              <p className="card-text"><small className="text-muted">{formatDay(article.createdAt, 'dddd, MMMM Do YYYY, h:mm:ss a')}</small></p>
            </div>
          </div>
        ) : <h1 className="text-center text-black-50">Article Not Available!</h1>
      }
    </>
  );
};

Detail.propTypes = {
  article: PropTypes.instanceOf(Object),
  onGetArticleDetail: PropTypes.func,
};

const mapStateToProps = state => ({
  article: state.blogs.articleDetail,
});

const mapDispatchToProps = dispatch => ({
  onGetArticleDetail: (id) => dispatch(blogAction.getBlogDetailStart(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
