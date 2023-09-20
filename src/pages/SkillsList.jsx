import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";

import { skillsList } from "../data/skillsList";

const SkillsList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full py-10 px-6 md:px-12">
            <Link
                to="/"
                className="pb-2 flex items-center gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
            >
                <BsArrowLeft className="mt-[1px] text-xl" /> Back
            </Link>
            <motion.h4
                initial={{ opacity: 0, translateY: 200 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-white"
            >
                Skills
            </motion.h4>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5 z-20">
                {skillsList.map((skill, index) => {
                    return (
                        <Skill
                            key={index}
                            icon={skill.icon}
                            text={skill.text}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Skill = ({ icon, text }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid-cols-1 bg-slate-700 p-4 text-[4rem] justify-center rounded-xl bg-opacity-25 border-[1.5px] border-[#ffffff15] backdrop-blur-lg"
        >
            {icon}
            <div className="mt-2 text-lg">
                <p>{text}</p>
            </div>
        </motion.div>
    );
};

export default SkillsList;
