import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { BsFacebook } from "react-icons/bs";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import profile from "../../public/profile.jpg";

const Main = () => {
    return (
        <div className="w-full">
            <div className="h-screen md:fixed left-0 text-center md:text-left">
                <div className="md:ml-8 flex flex-col justify-center items-center h-full w-full md:w-1/2 fixed">
                    <div>
                        <h5 className="font-bold text-4xl">
                            Welcome{" "}
                            <span className="text-3xl text-slate-400">
                                to my{" "}
                                <span className="text-white text-4xl">
                                    Space
                                </span>
                            </span>
                        </h5>
                        <h1 className="text-[3.5rem] font-bold">
                            I&apos;m Methupa
                        </h1>
                        <h2 className="text-slate-400 font-bold text-3xl">
                            Fullstack Developer
                        </h2>
                        <div className="hidden md:flex flex-col gap-3 mt-10">
                            <NavigationLink to="home" />
                            <NavigationLink to="about" />
                            <NavigationLink to="skills" />
                            <NavigationLink to="projects" />
                            <NavigationLink to="blog" />
                            <NavigationLink to="contact" />
                        </div>
                        <div className="md:hidden mt-10 flex justify-center items-center relative">
                            <div className="w-40 h-40 rounded-full bg-slate-600 absolute -z-10"></div>
                            <motion.img
                                initial={{ rotate: -120 }}
                                animate={{ rotate: 0 }}
                                transition={{ duration: 0.5 }}
                                src={profile}
                                alt="profile"
                                className="w-36 h-36 rounded-full shadow-xl shadow-gray-900"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:absolute right-0 w-full md:w-1/2 relative _gradient">
                <div className="h-full bg-inherit absolute"></div>
                <Home />
                <About />
                <Skills />
            </div>
        </div>
    );
};

const NavigationLink = ({ to }) => {
    return (
        <div className="group">
            <Link
                className="text-slate-400 group-hover:text-white duration-300 cursor-pointer font-medium text-sm flex items-center gap-4"
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-20}
            >
                <div className="w-16 h-[2px] bg-slate-400 group-hover:w-24 group-hover:bg-white duration-300"></div>
                {to.toUpperCase()}
            </Link>
        </div>
    );
};

export default Main;
