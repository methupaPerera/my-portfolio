import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { BsArrowLeft } from "react-icons/bs";

import { skillsList } from "../data/skillsList";
import { Skill } from "../components";

const SkillsList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full py-10 px-6 md:px-12">
            <Link
                to=".."
                className="pb-2 flex items-center gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
            >
                <BsArrowLeft className="mt-[1px] text-xl" /> Back
            </Link>
            <motion.h4
                initial={{ opacity: 0, translateY: 50 }}
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
                            index={index + 1}
                            icon={skill.icon}
                            text={skill.text}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsList;
