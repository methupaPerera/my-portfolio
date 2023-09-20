import React from "react";
import { ProfileLarge } from "../components";

import { motion } from "framer-motion";

const Home = () => {
    return (
        <div
            id="home"
            className="py-10 px-8 md:pl-6 min-h-screen flex flex-col justify-center gap-5"
        >
            <div className="flex">
                <div className="w-[10px] bg-white rounded-full"></div>
                <div className="py-3">
                    <div className="mb-8 ml-1 hidden md:block">
                        <ProfileLarge />
                    </div>
                    <div className="ml-2 text-right flex flex-col items-start">
                        <h1 className="-ml-3 flex items-center text-3xl font-bold">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 50 }}
                                transition={{duration: 0.4, delay: 0.1}}
                                className="mt-1 mr-2 w-10 h-[5px] bg-white rounded-full"
                            ></motion.span>
                            Methupa Perera{" "}
                        </h1>
                        <h2 className="mt-6 -ml-3 flex items-center text-slate-400 font-medium text-lg">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 50 }}
                                transition={{duration: 0.4, delay: 0.1}}
                                className="mr-2 w-10 h-[5px] bg-white rounded-full"
                            ></motion.span>
                            Making Things Interesting!{" "}
                        </h2>
                        <h3 className="mt-8 -ml-3 flex items-center font-medium text-lg">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 50 }}
                                transition={{duration: 0.4, delay: 0.1}}
                                className="mr-2 w-10 h-[5px] bg-white rounded-full"
                            ></motion.span>
                            18 Years{" "}
                        </h3>
                        <h4 className="mt-8 -ml-3 flex items-center font-medium text-lg">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 50 }}
                                transition={{duration: 0.4, delay: 0.1}}
                                className="mr-2 w-10 h-[5px] bg-white rounded-full"
                            ></motion.span>
                            Bandaragama, Sri Lanka{" "}
                        </h4>
                        <p className="mt-4 -ml-3 w-full md:w-5/6 flex items-center font-medium text-slate-400 text-left">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 76 }}
                                transition={{duration: 0.4, delay: 0.1}}
                                className="mr-2 w-[76px] h-[5px] bg-white rounded-full"
                            ></motion.span>
                            Interested in the entire frontend and backend
                            spectrum and working on ambitious projects with
                            positive people.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
