import { useEffect } from "react";

import { Blog } from "../components";
import { blogList } from "../data/blogList";

const BlogsList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogList.map((blog, index) => {
                return <Blog key={blog.id} index={index + 1} {...blog} />;
            })}
        </div>
    );
};

export default BlogsList;
