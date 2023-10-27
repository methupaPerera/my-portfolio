import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";

import { Work } from "../components";
import { workList } from "../data/workList";

const Works = () => {
    return (
        <div
            id="work"
            className="px-8 md:px-6 pt-28 pb-8 md:pt-12 md:pb-12 z-50"
        >
            <motion.h4
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-slate-400"
            >
                Work
            </motion.h4>

            <div className="mt-8 flex flex-col gap-8">
                {workList.map((work, index) => {
                    if (index > 1) {
                        return;
                    }
                    return (
                        <Work key={work.heading} index={index + 1} {...work} />
                    );
                })}
            </div>
            <div className="mt-6 flex justify-end">
                <Link
                    to="all-works"
                    className="flex items-center gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
                >
                    Explore more <BsArrowRight className="mt-[1px] text-xl" />
                </Link>
            </div>
        </div>
    );
};

export default Works;
