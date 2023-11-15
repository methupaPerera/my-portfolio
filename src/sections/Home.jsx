import React from "react";
import { ProfileLarge } from "../components";

import { motion } from "framer-motion";

const Home = () => {
    return (
        <div id="home" className="px-6 min-h-screen flex items-center">
            <div className="flex">
                <div className="w-2 bg-white rounded-full"></div>
                <div className="py-6">
                    <div className="mb-8 ml-1 hidden md:block">
                        <ProfileLarge />
                    </div>
                    <div className="text-left ml-2 flex flex-col items-start">
                        <h1 className="-ml-3 flex items-center text-[1.4rem] md:text-3xl font-bold">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 50 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="mt-1 mr-2 w-10 h-[8px] bg-white rounded-full"
                            ></motion.span>
                            Methupa Perera
                        </h1>

                        <h2 className="mt-6 -ml-3 flex items-center text-slate-400 font-medium md:text-lg">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 50 }}
                                transition={{ duration: 0.4, delay: 0.15 }}
                                className="mr-2 w-10 h-[8px] bg-white rounded-full"
                            ></motion.span>
                            Making Things Interesting !
                        </h2>

                        <h3 className="mt-8 -ml-3 flex items-center font-medium text-lg">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 50 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="mr-2 w-10 h-[8px] bg-white rounded-full"
                            ></motion.span>
                            18 Years{" "}
                        </h3>

                        <h4 className="mt-8 -ml-3 flex items-center font-medium text-lg">
                            <motion.span
                                initial={{ width: 0 }}
                                whileInView={{ width: 50 }}
                                transition={{ duration: 0.4, delay: 0.25 }}
                                className="mr-2 w-10 h-[8px] bg-white rounded-full"
                            ></motion.span>
                            Bandaragama, Sri Lanka{" "}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
