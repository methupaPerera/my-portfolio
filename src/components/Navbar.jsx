import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, navLinkDelay } from "../data/navLinks";
import "animate.css";

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
    const [isBorderVisible, setBorderVisible] = useState(false);
    const [isNavVisible, setNavVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const trackScroll = () => {
            if (window.scrollY > 20) {
                setBorderVisible(true);
            } else {
                setBorderVisible(false);
            }
        };

        window.addEventListener("scroll", trackScroll);
        document
            .getElementById("container")
            .addEventListener("click", () => setNavVisible(false));

        return () => {
            window.removeEventListener("scroll", trackScroll);
            window.removeEventListener("click", () => setNavVisible(false));
        };
    }, []);

    return (
        <>
            <div className="w-full h-16 flex md:hidden justify-between items-center backdrop-blur-sm fixed z-50">
                {isBorderVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.25 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-[1px] bg-white opacity-25 absolute bottom-0"
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
                                    className="flex flex-col gap-1 text-center cursor-pointer select-none absolute right-14 top-10"
                                >
                                    {navLinks.map((link, index) => {
                                        return (
                                            <AnimatedLink
                                                key={link + index}
                                                destination={link}
                                                delay={navLinkDelay[index]}
                                                index={index}
                                                activeIndex={activeIndex}
                                                setActiveIndex={setActiveIndex}
                                            />
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

const AnimatedLink = ({
    destination,
    delay,
    index,
    activeIndex,
    setActiveIndex,
}) => {
    const baseClassName =
        "px-14 py-4 block bg-slate-700 hover:bg-slate-800 rounded-lg duration-200";
    const className =
        activeIndex === index
            ? "!bg-slate-800 " + baseClassName
            : baseClassName;

    return (
        <motion.div
            style={{ originX: "right", originY: "top" }}
            initial={{ rotate: -40 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.4, delay: delay }}
        >
            <a
                onClick={() => setActiveIndex(index)}
                href={`#${destination}`}
                className={className}
            >
                {destination.toUpperCase()}
            </a>
        </motion.div>
    );
};

export default Navbar;
