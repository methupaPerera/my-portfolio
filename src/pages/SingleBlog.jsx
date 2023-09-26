import React from "react";
import { useParams } from "react-router-dom";

import { blogList } from "../data/blogList";

const SingleBlog = () => {
    const { id } = useParams();
    return <div>Single Blog {id}</div>;
};

export default SingleBlog;
