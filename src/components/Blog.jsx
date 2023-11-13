import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = ({ id, heading, image, text, date, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: index / 10 }}
            className="p-4 text-[0.8rem] bg-slate-700 bg-opacity-25 backdrop-blur-lg rounded-xl border-[1.5px] border-[#ffffff15] z-40 cursor-pointer"
        >
            <Link
                to={`/all-blogs/${id}`}
                className="h-full flex flex-col justify-between gap-5 "
            >
                <h3 className="text-xl font-medium">{heading}</h3>
                <img src={image} className="w-full rounded-lg" loading="lazy" />
                <p className="text-normal">
                    {text}
                    <span className="text-slate-400">...see more</span>
                </p>
                <p className="font-lg font-medium text-slate-400 text-right">
                    {date}
                </p>
            </Link>
        </motion.div>
    );
};

export default Blog;
