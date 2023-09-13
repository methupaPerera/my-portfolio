import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isBorder, setBorder] = useState(false);

    useEffect(() => {
        const trackScroll = () => {
            if (scrollY > 0) {
                setBorder(true);
            } else {
                setBorder(false);
            }
        };

        window.addEventListener("scroll", trackScroll);

        return () => window.removeEventListener("scroll", trackScroll);
    }, []);

    return (
        <div className="h-16 md:hidden flex items-center justify-between backdrop-blur-sm fixed z-50 w-full">
            {isBorder && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    transition={{ duration: 0.5 }}
                    className="h-[1px] opacity-25 w-full absolute bottom-0 bg-white nav-animate"
                ></motion.div>
            )}
            <div className="px-8 flex items-center justify-between w-full">
                <h1 className="text-lg font-bold">METHUPA</h1>
                <RxHamburgerMenu />
            </div>
        </div>
    );
};

export default Navbar;
