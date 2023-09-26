import React from "react";
import { motion } from "framer-motion";

const Blog = ({ heading, id, image, paras, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 150 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: index / 10 }}
            className="grid-cols-1 bg-slate-700 p-4 text-[0.8rem] justify-center rounded-xl bg-opacity-25 border-[1.5px] border-[#ffffff15] backdrop-blur-lg z-40"
        >
            {heading}
        </motion.div>
    );
};

export default Blog;
