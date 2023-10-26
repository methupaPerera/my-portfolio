import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import { BsArrowLeft } from "react-icons/bs";

const BlogLayout = () => {
    return (
        <div className="w-full py-10 px-6 md:px-12">
            <Link
                to="/"
                className="pb-2 flex items-center gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
            >
                <BsArrowLeft className="mt-[1px] text-xl" /> Back
            </Link>
            <h4 className="text-5xl font-bold text-white">Blogs</h4>

            <div className="mt-6 z-20">
                <Outlet />
            </div>
        </div>
    );
};

export default BlogLayout;
