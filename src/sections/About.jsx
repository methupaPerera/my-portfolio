import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div
            id="about"
            className="px-8 md:px-6 min-h-screen flex flex-col justify-center gap-10"
        >
            <motion.h4
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold text-slate-400"
            >
                About
            </motion.h4>

            <motion.div
                initial={{ opacity: 0, translateY: 150 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col gap-5 font-medium"
            >
                <p>
                    I am a skilled{" "}
                    <span className="text-slate-400 font-bold">
                        Full Stack Developer
                    </span>{" "}
                    based in Sri Lanka, passionate about creating captivating
                    user experiences. With the knwoledge in{" "}
                    <span className="text-slate-400 font-bold">
                        front-end and back-end
                    </span>{" "}
                    technologies, I bring websites to life with seamless
                    interactions.
                </p>
                <p>
                    I am a{" "}
                    <span className="text-slate-400 font-bold">
                        self-learner
                    </span>
                    , constantly staying updated with the latest industry
                    trends. In my free time, I enjoy watching TV series and
                    movies, and I am a fan of{" "}
                    <span className="text-slate-400 font-bold">
                        Quantum Physics
                    </span>
                    .
                </p>
                <p>
                    Let's{" "}
                    <span className="text-slate-400 font-bold">
                        collaborate
                    </span>{" "}
                    to bring your vision to life and create a memorable website
                    experience.
                </p>
            </motion.div>
        </div>
    );
};

export default About;
