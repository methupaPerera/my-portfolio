import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [isBorderVisible, setBorderVisible] = useState(false);

    useEffect(() => {
        const trackScroll = () => {
            if (scrollY > 0) {
                setBorderVisible(true);
            } else {
                setBorderVisible(false);
            }
        };

        window.addEventListener("scroll", trackScroll);

        return () => window.removeEventListener("scroll", trackScroll);
    }, []);

    return (
        <div className="w-full h-16 flex md:hidden justify-between items-center backdrop-blur-sm fixed z-50">
            {isBorderVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ duration: 0.5 }}
                    className="h-[1px] opacity-25 w-full absolute bottom-0 bg-white nav-animate"
                ></motion.div>
            )}
            <div className="px-6 w-full flex justify-between items-center">
                <h1 className="text-2xl font-bold cursor-pointer">
                    <Link to="/">METHUPA</Link>
                </h1>
                <RxHamburgerMenu className="text-4xl cursor-pointer" />
            </div>
        </div>
    );
};

export default Navbar;
