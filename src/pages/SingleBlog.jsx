import React from "react";
import { Link, useParams } from "react-router-dom";

import { Blog } from "../components";
import { blogPosts } from "../data/blogPosts";

import { BsArrowReturnLeft } from "react-icons/bs";

const SingleBlog = () => {
    const { id } = useParams();
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
