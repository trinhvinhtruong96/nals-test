import React from 'react';
import style from './BlogItem.module.css';
import moment from 'moment';

const BlogItem = ({ data, click, ...props }) => {

    return (
        <li className={["media mb-3 pb-3 list-view-item align-items-stretch", style.listViewItem].join(" ")}>
            <img
                src={data.image}
                className="col-4 mr-3 px-0"
                alt={data.title}
                style={{ cursor: "pointer" }}
                onClick={click}
            />
            <div className="media-body d-flex flex-column">
                <h5 className="mt-0 mb-1">{data.title}</h5>
                <p>{data.content}</p>
                <h6 className="text-black-50 mt-auto ml-auto">{moment(data.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}</h6>
            </div>

        </li>
    );
};

export default BlogItem;
