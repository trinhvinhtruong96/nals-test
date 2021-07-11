import React from 'react';

const Pagination = ({ data, onPageChange }) => {
  let pageStart = 1;
  const pageArray = Array(data.pageNum)
    .fill()
    .map(() => pageStart++);
  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li className={data.page !== 1 ? 'page-item' : 'page-item disabled'} onClick={() => data.page !== 1 && onPageChange(data.page - 1)}>
          <p className="page-link" aria-disabled="true">Previous</p>
        </li>
        {pageArray.map((el, index) => (
          <li key={el} className={data.page === index + 1 ? 'page-item active' : 'page-item'} onClick={() => onPageChange(index + 1)}>
            <p className="page-link">
              {index + 1}
              {' '}
            </p>
          </li>
        ))}
        <li className={data.page !== data.pageNum ? 'page-item' : 'page-item disabled'} onClick={() => data.page !== data.pageNum && onPageChange(data.page + 1)}>
          <p className="page-link">Next</p>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
