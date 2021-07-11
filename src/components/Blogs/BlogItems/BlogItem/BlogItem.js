import React from 'react';
import PropTypes from 'prop-types';
import style from './BlogItem.module.css';
import { formatDay } from '../../../../shared/utility';

const BlogItem = ({ data, click }) => (
  <li className={['media mb-3 pb-3 list-view-item align-items-stretch', style.listViewItem].join(' ')}>
    <img
      src={data.image}
      className="col-4 mr-3 px-0"
      alt={data.title}
      style={{ cursor: 'pointer' }}
      onClick={click}
    />
    <div className="media-body d-flex flex-column">
      <h5 className="mt-0 mb-1">{data.title}</h5>
      <p>{data.content}</p>
      <small className="text-muted mt-auto ml-auto">{formatDay(data.createdAt, 'dddd, MMMM Do YYYY, h:mm:ss a')}</small>
    </div>

  </li>
);

BlogItem.propTypes = {
  data: PropTypes.instanceOf(Object),
  click: PropTypes.func,
};

export default BlogItem;
