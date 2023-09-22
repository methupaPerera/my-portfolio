import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { skillsList } from "../data/skillsList";
import { Skill } from "../components";

import { BsArrowRight } from "react-icons/bs";

const Skills = () => {
    return (
        <div
            id="skills"
            className="px-8 md:px-6 pt-28 pb-8 md:pt-12 md:pb-12"
        >
            <motion.h4
                initial={{ opacity: 0, translateY: 200 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10 text-5xl font-bold text-slate-400"
            >
                Skills
            </motion.h4>

            <div className="flex flex-col gap-5 z-20">
                {skillsList.map((skill, index) => {
                    if (index <= 2 || index > 5) {
                        return;
                    }
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
            
            <div className="flex justify-end">
                <Link
                    to="all-skills"
                    className="flex items-center gap-1 underline text-slate-400 hover:text-white duration-300 font-medium text-lg"
                >
                    Explore more <BsArrowRight className="mt-[1px] text-xl" />
                </Link>
            </div>
        </div>
    );
};

export default Skills;
