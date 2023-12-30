import { useState } from "react";

import { Profile, SocialIcon } from "../components";

import { socialLinks } from "../data/socialLinks";
import { navLinks } from "../data/navLinks";

const Main = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="md:ml-16 h-screen text-center md:text-left md:fixed left-0">
            <div className="w-full h-screen flex flex-col justify-center">
                <div className="px-4 md:pl-10">
                    <h1 className="text-[3rem] font-bold">
                        I&apos;<span className="text-slate-400">m</span> Methupa
                    </h1>
                    <h5 className="mb-4 text-2xl font-bold">
                        Welcome{" "}
                        <span className="text-2xl text-slate-400">
                            to my{" "}
                            <span className="text-white text-2xl">Space</span>
                        </span>
                    </h5>
                    <h2 className="text-slate-400 text-2xl font-bold">
                        Fullstack Developer
                    </h2>
                    <div className="hidden md:flex flex-col gap-4 mt-8">
                        {navLinks.map((link, index) => {
                            return (
                                <NavigationLink
                                    key={link}
                                    to={link}
                                    index={index}
                                    activeIndex={activeIndex}
                                    setActiveIndex={setActiveIndex}
                                />
                            );
                        })}
                    </div>
                    <div className="md:hidden block">
                        <Profile />
                    </div>
                    <div className="mt-10 md:mt-8 -ml-3 md:-ml-0 flex gap-5 justify-center md:justify-start">
                        {socialLinks.map((link) => {
                            return (
                                <SocialIcon link={link.link} name={link.social} key={link.social}>
                                    {link.icon}
                                    {console.log(link.icon)}
                                </SocialIcon>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavigationLink = ({ to, index, activeIndex, setActiveIndex }) => {
    const baseClassName =
        "flex items-center gap-4 text-slate-400 text-sm font-bold group-hover:text-white duration-300 cursor-pointer";
    const className =
        activeIndex === index ? "_active " + baseClassName : baseClassName;

    return (
        <div className="group">
            <a
                onClick={() => setActiveIndex(index)}
                href={`#${to}`}
                className={className}
            >
                <div className="w-16 h-1 rounded-full bg-slate-400 group-hover:w-28 group-hover:bg-white duration-300"></div>
                <div>{to.toUpperCase()}</div>
            </a>
        </div>
    );
};

export default Main;
