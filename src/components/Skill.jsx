import React from "react";
import { motion } from "framer-motion";

const Skill = ({ icon, text, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 150 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.4, delay: index/10 }}
            className="grid-cols-1 bg-slate-700 p-4 text-[4rem] justify-center rounded-xl bg-opacity-25 border-[1.5px] border-[#ffffff15] backdrop-blur-lg"
        >
            {icon}
            <div className="mt-2 text-lg">
                <p>{text}</p>
            </div>
        </motion.div>
    );
};

export default Skill;
