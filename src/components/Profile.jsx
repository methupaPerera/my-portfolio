import React from "react";
import { motion } from "framer-motion";

import profile from "../assets/profile.jpg";

const Profile = () => {
    return (
        <div className="mt-10 flex md:hidden justify-center items-center relative">
            <div className="w-40 h-40 rounded-full bg-slate-400 absolute"></div>
            <motion.img
                initial={{ rotate: -120 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                src={profile}
                alt="profile"
                className="w-36 h-36 rounded-full shadow-xl shadow-gray-900 z-10"
            />
        </div>
    );
};

export default Profile;
