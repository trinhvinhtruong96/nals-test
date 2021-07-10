import moment from 'moment';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as blogAction from "../../stores/actions/blogs";

const Detail = ({
    article,
    onGetArticleDetail,
    ...props
}) => {
    const params = useParams();

    useEffect(() => {
        onGetArticleDetail(params.id);
    }, []);
    return (
        <Fragment>
            {
                article ? (
                    <div className="card mb-3 mt-4" >
                        <img src={article.image} className="card-img-top" alt={article.title} />
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <p className="card-text">{article.content}</p>
                            <p className="card-text"><small className="text-muted">{moment(article.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</small></p>
                        </div>
                    </div >
                ) : <h1 className="text-center text-black-50">Article Not Available!</h1>}
        </Fragment>

    );
};

const mapStateToProps = state => {
    return {
        article: state.blogs.articleDetail
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetArticleDetail: (id) => dispatch(blogAction.getBlogDetailStart(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);
