import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = ({ id, heading, image, text, date, index }) => {
    return (
        <Link to={`/all-blogs/${id}`} className="backdrop-blur-lg rounded-xl border-[1.5px] border-[#ffffff15] z-40">
            <motion.div
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.4, delay: index / 10 }}
                className="flex flex-col gap-5 bg-slate-700 p-4 text-[0.8rem] justify-center bg-opacity-25 cursor-pointer"
            >
                <h3 className="text-xl font-medium">{heading}</h3>
                <img src={image} className="w-full rounded-lg" />
                <p className="text-normal">
                    {text}
                    <span className="text-slate-400">...see more</span>
                </p>
                <p className="font-lg font-medium text-slate-400 text-right">
                    {date}
                </p>
            </motion.div>
        </Link>
    );
};

export default Blog;
