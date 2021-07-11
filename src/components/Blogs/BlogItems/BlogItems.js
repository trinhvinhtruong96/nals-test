import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { pathRoute } from '../../../router/router';
import Pagination from '../../UI/Pagination/Pagination';
import BlogItem from './BlogItem/BlogItem';

const BlogItems = ({
  items,
}) => {
  const history = useHistory();

  const [paginationData, setPaginationData] = useState({
    page: 1,
    limit: 12,
    pageNum: 0,
  });

  const [pageItems, setPageItems] = useState([]);

  const onChangePageItems = () => {
    const pageStart = (paginationData.page - 1) * paginationData.limit;
    const pageEnd = pageStart + 12;
    setPageItems(items.slice(pageStart, pageEnd));
  };

  const pageChangeHandler = (page) => {
    setPaginationData({
      ...paginationData,
      page,
    });
  };

  useEffect(() => {
    const page = 1;
    const pageNum = Math.ceil(items.length / paginationData.limit);
    setPaginationData({
      ...paginationData,
      pageNum,
      page,
    });
  }, [items]);

  useEffect(() => {
    onChangePageItems();
  }, [paginationData]);

  return (
    <ul className="list-unstyled">
      {pageItems && pageItems.map((el) => (
        <BlogItem key={el.id} data={el} click={() => history.push(pathRoute.detail.replace(':id', el.id))} />
      ))}
      {items.length !== 0 && <Pagination data={paginationData} onPageChange={pageChangeHandler} />}
      {items.length === 0 && <h1 className="text-center text-black-50">No Article</h1>}
    </ul>
  );
};

export default BlogItems;
