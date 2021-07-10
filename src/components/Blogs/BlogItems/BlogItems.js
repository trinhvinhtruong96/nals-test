import React, { useEffect, useState } from 'react';
import Pagination from '../../UI/Pagination/Pagination';
import BlogItem from './BlogItem/BlogItem';

const BlogItems = ({
    data,
    items,
    ...props
}) => {
    const [paginationData, setPaginationData] = useState({
        page: 1,
        limit: 12,
        pageNum: 0,
    });

    const [pageItems, setPageItems] = useState([]);

    const onChangePageItems = () => {
        const pageStart = (paginationData.page - 1) * paginationData.limit;
        const pageEnd = pageStart + 12;
        setPageItems(items.slice(pageStart, pageEnd))
    }

    const pageChangeHandler = (page) => {
        setPaginationData({
            ...paginationData,
            page
        })
    }

    useEffect(() => {
        const pageNum = Math.ceil(items.length / paginationData.limit);
        setPaginationData({
            ...paginationData,
            pageNum
        })
    }, [items])

    useEffect(() => {
        onChangePageItems();
    }, [paginationData])

    return (
        <ul className="list-unstyled">
            {pageItems && pageItems.map((el, index) => (
                <BlogItem key={index} data={el} />
            )
            )}
            {items.length !== 0 && <Pagination data={paginationData} onPageChange={pageChangeHandler} />}
            {items.length === 0 && <h1 className="text-center text-black-50">No Article</h1>}

        </ul>
    );
};

export default BlogItems;
