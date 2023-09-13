import React from "react";
import { Link } from "react-scroll";
import { BsFacebook } from "react-icons/bs";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";

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
                        <div className="md:hidden mt-10">
                            <p>Profile</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:absolute right-0 w-full md:w-1/2 relative _gradient">
                <div className="h-full bg-inherit absolute"></div>
                {/* This is the background for this area */}
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
            >
                <div className="w-16 h-[1px] bg-slate-400 group-hover:w-24 group-hover:bg-white duration-300"></div>
                {to.toUpperCase()}
            </Link>
        </div>
    );
};

export default Main;
