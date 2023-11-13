import React, { Suspense } from "react";
import { Link, useParams } from "react-router-dom";

import { blogPosts } from "../data/blogPosts";

import { BsArrowReturnLeft } from "react-icons/bs";
import { Loading } from "../components";

const SingleBlog = () => {
    const { id } = useParams();

    if (id < 0 || id > blogPosts.length) {
        return (
            <>
                <Link
                    to=".."
                    className="pb-2 mb-6 flex items-center justify-end gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
                >
                    <BsArrowReturnLeft className="mt-[5px] text-xl" />
                    Return
                </Link>
                <p className="text-slate-400 text-4xl font-bold absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
                    No blog post available.
                </p>
            </>
        );
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className="mx-auto sm:w-3/4 md:w-4/6">
                <Link
                    to=".."
                    className="pb-2 mb-6 flex items-center justify-end gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
                >
                    <BsArrowReturnLeft className="mt-[5px] text-xl" />
                    Return
                </Link>
                {blogPosts[id - 1]}
            </div>
        </Suspense>
    );
};

export default SingleBlog;
