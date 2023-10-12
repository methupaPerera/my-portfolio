import React from "react";
import { Link, useParams } from "react-router-dom";

import { blogPosts } from "../data/blogPosts";

import { BsArrowReturnLeft } from "react-icons/bs";

const SingleBlog = () => {
    const { id } = useParams();

    if (id < 0 || id > blogPosts.length) {
        return <p className="text-slate-400 text-4xl font-bold absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">No blog post available.</p>
    }

    return (
        <div>
            <Link
                to=".."
                className="pb-2 mb-6 flex items-center justify-end gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
            >
                <BsArrowReturnLeft className="mt-[5px] text-xl" />
                Return
            </Link>
            {blogPosts[id - 1]}
        </div>
    );
};

export default SingleBlog;
