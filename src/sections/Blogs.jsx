import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { blogList } from "../data/blogList";
import { Blog } from "../components";

import { BsArrowRight } from "react-icons/bs";

const Blogs = () => {
    return (
        <div id="blog" className="px-8 md:px-6 pt-28 pb-8 md:pt-12 md:pb-12">
            <motion.h4
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-5xl font-bold text-slate-400"
            >
                Blogs
            </motion.h4>

            <div className="flex flex-col gap-5 z-20">
                {blogList.map((blog, index) => {
                    if (index > 1) {
                        return;
                    }
                    return <Blog key={blog.id} index={index + 1} {...blog} />;
                })}
            </div>

            <div className="mt-6 flex justify-end">
                <Link
                    to="all-blogs"
                    className="flex items-center gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
                >
                    Explore more <BsArrowRight className="mt-[1px] text-xl" />
                </Link>
            </div>
        </div>
    );
};

export default Blogs;
