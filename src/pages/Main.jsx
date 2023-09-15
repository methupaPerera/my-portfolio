import React from "react";
import { Link } from "react-scroll";

import { Profile, SocialIcon } from "../components";

import { socialLinks } from "../data/socialLinks";

const Main = () => {
    return (
        <div className="h-screen md:fixed left-0 text-center md:text-left">
            <div className="w-full h-screen md:w-1/2 flex flex-col justify-center items-center fixed">
                <div className="px-4 md:pl-10">
                    <h1 className="text-[3.5rem] font-bold">
                        I&apos;<span className="text-slate-400">m</span> Methupa
                    </h1>
                    <h5 className="mb-4 text-4xl font-bold">
                        Welcome{" "}
                        <span className="text-3xl text-slate-400">
                            to my{" "}
                            <span className="text-white text-4xl">Space</span>
                        </span>
                    </h5>
                    <h2 className="text-slate-400 text-2xl font-bold">
                        Fullstack Developer
                    </h2>
                    <div className="hidden md:flex flex-col gap-4 mt-8">
                        <NavigationLink to="home" />
                        <NavigationLink to="about" />
                        <NavigationLink to="skills" />
                        <NavigationLink to="blog" />
                        <NavigationLink to="contact" />
                    </div>
                    <div className="md:hidden block">
                        <Profile />
                    </div>
                    <div className="mt-10 md:mt-8 -ml-3 md:-ml-0 flex gap-5 justify-center md:justify-start">
                        {socialLinks.map((link) => {
                            return (
                                <SocialIcon link={link.link} key={link.social}>
                                    {link.icon}
                                </SocialIcon>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavigationLink = ({ to }) => {
    return (
        <div className="group">
            <Link
                className="flex items-center gap-4 text-slate-400 text-sm font-bold group-hover:text-white duration-300 cursor-pointer"
                activeClass="_active"
                to={to}
                spy={true}
                smooth={true}
                duration={500}
            >
                <div className="w-16 h-1 rounded-full bg-slate-400 group-hover:w-28 group-hover:bg-white duration-300"></div>
                <div>{to.toUpperCase()}</div>
            </Link>
        </div>
    );
};

export default Main;
