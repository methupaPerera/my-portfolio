import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
            <div
                id="contact"
                className="min-h-screen flex flex-col justify-center px-8 md:px-6 pt-28 pb-8 md:pt-12 md:pb-12"
            >
                <motion.h4
                    initial={{ opacity: 0, translateY: 200 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-5xl font-bold text-slate-400"
                >
                    Contact
                </motion.h4>

                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-4 duration-300 focus:outline-none border-[1.5px] border-[#ffffff15] focus:shadow-[0_0_1rem_] focus:shadow-[#ffffff15]  lg:col-span-1 col-span-2 rounded-xl backdrop-blur-lg bg-transparent z-50"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-4 duration-300 focus:outline-none border-[1.5px] border-[#ffffff15] focus:shadow-[0_0_1rem_] focus:shadow-[#ffffff15]  lg:col-span-1 col-span-2 rounded-xl backdrop-blur-lg bg-transparent z-50"
                    />
                    <textarea
                        placeholder="Message"
                        className="p-4 h-40 duration-300 focus:outline-none border-[1.5px] border-[#ffffff15] focus:shadow-[0_0_1rem_] focus:shadow-[#ffffff15]  col-span-2 rounded-xl backdrop-blur-lg bg-transparent z-50"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
