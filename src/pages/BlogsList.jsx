import React from "react";

import { Blog } from "../components";
import { blogList } from "../data/blogList";

const BlogsList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {blogList.map((blog, index) => {
                return <Blog key={blog.id} index={index + 1} {...blog} />;
            })}
        </div>
    );
};

export default BlogsList;
