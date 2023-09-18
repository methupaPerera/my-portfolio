import React from "react";
import { motion } from "framer-motion";

import { skillsList } from "../data/skillsList";

const Skills = () => {
    return (
        <div
            id="skills"
            className="px-8 md:px-6 py-16 min-h-screen flex flex-col justify-center gap-10"
        >
            <motion.h4
                initial={{ opacity: 0, translateY: 200 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-slate-400"
            >
                Skills
            </motion.h4>
            <div className="flex flex-col gap-8 z-50">
                {skillsList.map((skill, index) => {
                    return <Skill key={index} icon={skill.icon} text={skill.text} />;
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
            className="bg-slate-700 p-4 text-[4rem] rounded-xl bg-opacity-25 shadow-[0_0_0.8rem] shadow-slate-600 backdrop-blur-lg"
        >
            {icon}
            <div className="mt-2 text-lg">
                <p>{text}</p>
            </div>
        </motion.div>
    );
};

export default Skills;
