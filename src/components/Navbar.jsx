import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "animate.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
    const [isBorderVisible, setBorderVisible] = useState(false);
    const [isNavVisible, setNavVisible] = useState(false);

    useEffect(() => {
        const trackScroll = () => {
            if (window.scrollY > 0) {
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
                    className="h-[1px] opacity-25 w-full absolute bottom-0 bg-white"
                ></motion.div>
            )}
            <div className="px-6 w-full flex justify-between items-center relative">
                <h1 className="text-2xl font-bold cursor-pointer">
                    <Link to="/">METHUPA</Link>
                </h1>
                <div>
                    {isNavVisible ? (
                        <MdOutlineCancel
                            onClick={() => setNavVisible(false)}
                            className="text-4xl cursor-pointer animate__animated animate__rotateIn  animate__faster"
                        />
                    ) : (
                        <RxHamburgerMenu
                            onClick={() => setNavVisible(true)}
                            className="text-4xl cursor-pointer animate__animated animate__rotateIn animate__faster"
                        />
                    )}

                    <AnimatePresence>
                        {isNavVisible && (
                            <motion.div
                                initial={{ rotate: -30, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ originX: "right", originY: "top" }}
                                exit={{ rotate: -20, opacity: 0 }}
                                className="flex flex-col gap-1 cursor-pointer absolute right-14 top-10 select-none"
                            >
                                <AnimatedLink destination="home" delay={0} />
                                <AnimatedLink
                                    destination="about"
                                    delay={0.05}
                                />
                                <AnimatedLink
                                    destination="skills"
                                    delay={0.1}
                                />
                                <AnimatedLink destination="blog" delay={0.15} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const AnimatedLink = ({ destination, delay }) => {
    return (
        <NavLink to={destination} spy={true} smooth={true} duration={700}>
            <motion.div
                className="px-14 py-4 bg-slate-700 hover:bg-slate-800 rounded-xl duration-200"
                style={{ originX: "right", originY: "top" }}
                initial={{ rotate: -40 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.1, delay: delay }}
            >
                {destination.toUpperCase()}
            </motion.div>
        </NavLink>
    );
};

export default Navbar;
