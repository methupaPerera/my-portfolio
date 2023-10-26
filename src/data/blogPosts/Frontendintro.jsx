import { useEffect } from "react";
import { motion } from "framer-motion";

import { FaHandPointRight } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

const Frontendintro = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <motion.div
            initial={{ opacity: 0, translateY: 200 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
        >
            <h1 className="text-3xl font-bold">
                Introduction to Frontend Development.
            </h1>
            <div className="flex flex-col gap-6">
                <p>
                    As I've been involved in coding for a while, I'd like to
                    provide an introduction to this subject for newcomers. And
                    I'm also going to give some pieces of advice for you. Most
                    of the newcomers are tend to do Frontend Development by
                    using languages like HTML, CSS & JavaScript. I'm also one of
                    them. 😀
                </p>
                <p>
                    In the beginning it can be very easy for you as you can see
                    an output of your code immediately. However, after starting
                    to dive deeper into JavaScript frameworks & libraries like
                    Angular, Vue, React & NextJs, frontend development can make
                    your life like hell almost (just kidding 😅), if you didn't
                    practice those very well.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-slate-400 text-2xl font-bold">
                            What is Frontend Development ?
                        </h2>
                        <p>
                            <span className="text-slate-400">
                                According to Wikipedia
                            </span>
                            ,{" "}
                            <q>
                                Front-end web development is the development of
                                the graphical user interface of a website,
                                through the use of HTML, CSS, and JavaScript, so
                                that users can view and interact with that
                                website.
                            </q>
                        </p>
                    </div>

                    <div className="my-6 p-4 flex flex-col gap-2 bg-slate-800 rounded-xl static z-50">
                        <h5 className="font-bold text-xl">Good to know ! 🧐</h5>
                        <p className="font-medium">
                            Plenty of people think that frontend development is
                            easier than backend development. But I have to
                            respectfully disagree to that because both of them
                            have their own complexities.
                        </p>
                        <p className="font-medium">
                            As both of these requires the knowledge of a
                            programming language, there are hundreds of concepts
                            and theories to learn. To be honest, I guess the
                            backend has more theories based on my experience.
                        </p>
                        <p className="font-medium">
                            However, as technologies update, both frontend and
                            backend technologies will become more advanced than
                            they are now !
                        </p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h2 className="text-slate-400 text-2xl font-bold">
                            What should I learn in Frontend ?
                        </h2>
                        <p>
                            I'm not going to point out you some languages &
                            technologies and say "Hey you! learn these...".
                            Instead I'll tell you{" "}
                            <span className="text-slate-400">
                                what to learn
                            </span>{" "}
                            and{" "}
                            <span className="text-slate-400">
                                what to avoid
                            </span>{" "}
                            when learning from my limited (almost) experience.
                            If you don't want to read and just want to know the
                            technologies you should learn, please refer{" "}
                            <a
                                href="https://roadmap.sh/"
                                target="_blank"
                                className="underline text-slate-400"
                            >
                                roadmap.sh
                            </a>
                        </p>
                    </div>

                    <div className="my-4 text-slate-400">
                        <h3 className="font-bold text-xl">Table of Content.</h3>
                        <div className="font-medium mt-2 ml-4 text-lg">
                            <a
                                href="#first"
                                className="flex items-center gap-1 cursor-pointer hover:underline"
                            >
                                <AiOutlineLink />
                                Familiarize yourself with HTML & CSS.
                            </a>
                            <a
                                href="#second"
                                className="flex items-center gap-1 cursor-pointer hover:underline"
                            >
                                <AiOutlineLink />
                                Grasp what a programming language is.
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-4">
                        <div id="first" className="flex flex-col gap-2">
                            <h4 className="font-bold text-lg">
                                1. Familiarize yourself with HTML & CSS.
                            </h4>
                            <p>
                                Almost everyone who come to do coding stuff will
                                start from these two{" "}
                                <span className="text-slate-400">
                                    non-programming
                                </span>{" "}
                                languages. You can find tons of free resources
                                to learn these on the internet. Basically, you
                                will use HTML to define the structure of your
                                website and CSS to make them looking good.
                            </p>
                            <p>
                                As these two languages are relatively easy, you
                                can learn those rapidly. However you'll find
                                circumstances which confusing and hard to
                                understand. If that's the case, all you have to
                                do is googling. 😁 And I must say{" "}
                                <span className="text-slate-400 font-bold">
                                    "Please don't try to memorize everything."
                                </span>
                                because it will waste your time. You can invest
                                that time to learn a programming language like
                                JavaScript which have more advanced concepts.
                                Besides, who memorize those things when people
                                can just google and find those. 😂
                            </p>
                            <div>
                                <p className="font-bold text-slate-400">
                                    Resources
                                </p>
                                <div className="text-slate-400 ml-4">
                                    <p className="mb-1 flex items-center gap-2">
                                        <FaHandPointRight />{" "}
                                        <a
                                            href="https://www.w3schools.com"
                                            target="_blank"
                                            className="underline"
                                        >
                                            https://www.w3schools.com
                                        </a>
                                    </p>
                                    <div>
                                        <p className="flex items-center gap-2">
                                            <FaHandPointRight />{" "}
                                            <a
                                                href="https://www.youtube.com"
                                                target="_blank"
                                                className="underline"
                                            >
                                                https://www.youtube.com
                                            </a>
                                        </p>
                                        <ul className="list-disc ml-16 mt-1">
                                            <li>Web Dev Simplified</li>
                                            <li>Leela Web Dev</li>
                                            <li>Net Ninja</li>
                                            <li>FreeCodeCamp</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="second" className="mt-2 flex flex-col gap-2">
                            <h4 className="font-bold text-lg">
                                2. Grasp what a programming language is.
                            </h4>
                            <p>
                                After learning HTML & CSS, you have to learn a
                                programming language, JavaScript so to say.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Frontendintro;
