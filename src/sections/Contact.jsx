import React from "react";

import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [inputValues, setInputValues] = useState({
        name: "",
        email: "",
        message: "",
    });

    const url = "http://localhost:4000/send-mail";

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputValues),
        });

        const data = await response.json();

        console.log(data);
    };

    return (
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

            <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={inputValues.name}
                    onChange={(event) =>
                        setInputValues({
                            ...inputValues,
                            name: event.target.value,
                        })
                    }
                    className="p-4 duration-300 focus:outline-none border-[1.5px] border-[#ffffff15] focus:shadow-[0_0_1rem_] focus:shadow-[#ffffff15]  lg:col-span-1 col-span-2 rounded-xl backdrop-blur-lg bg-transparent z-40"
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={inputValues.email}
                    onChange={(event) =>
                        setInputValues({
                            ...inputValues,
                            email: event.target.value,
                        })
                    }
                    className="p-4 duration-300 focus:outline-none border-[1.5px] border-[#ffffff15] focus:shadow-[0_0_1rem_] focus:shadow-[#ffffff15]  lg:col-span-1 col-span-2 rounded-xl backdrop-blur-lg bg-transparent z-40"
                />
                <textarea
                    placeholder="Message"
                    value={inputValues.message}
                    onChange={(event) =>
                        setInputValues({
                            ...inputValues,
                            message: event.target.value,
                        })
                    }
                    className="p-4 h-40 duration-300 focus:outline-none border-[1.5px] border-[#ffffff15] focus:shadow-[0_0_1rem_] focus:shadow-[#ffffff15]  col-span-2 rounded-xl backdrop-blur-lg bg-transparent z-40"
                />
                <button
                    type="submit"
                    className="py-4 col-span-2 rounded-lg text-lg border-[1.5px] border-[#ffffff15] duration-300 hover:shadow-[0_0_1rem_] hover:shadow-[#ffffff15] backdrop-blur-lg bg-transparent z-40"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
