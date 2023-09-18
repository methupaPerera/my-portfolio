import React from "react";
import { motion } from "framer-motion";

import profile from "../assets/profile.jpg";

export const Profile = () => {
    return (
        <div className="mt-10 flex justify-center items-center relative">
            <div className="w-40 h-40 rounded-full bg-slate-700 absolute"></div>
            <motion.img
                initial={{ rotate: -120 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                src={profile}
                alt="profile"
                className="w-36 h-36 rounded-full shadow-xl shadow-gray-900 z-50"
            />
        </div>
    );
};

export const ProfileLarge = () => {
    return (
        <div className="flex flex-col items-startjustify-center relative">
            <motion.div
                initial={{ width: 150 }}
                whileInView={{ width: 224 }}
                transition={{ duration: 0.5 }}
                className="w-56 h-40 rounded-r-full bg-slate-700 absolute -top-[1px]"
            ></motion.div>
            <img
                src={profile}
                alt="profile"
                className="w-36 h-36 rounded-r-full shadow-xl shadow-gray-900 z-50"
            />
        </div>
    );
};
