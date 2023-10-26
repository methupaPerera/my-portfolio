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

                    <div className="mt-4 text-slate-400">
                        <h3 className="font-bold text-xl">Table of Content.</h3>
                        <div className="flex flex-col gap-2 font-medium mt-2 ml-4 text-lg">
                            <a
                                href="#first"
                                className="flex items-center gap-1 cursor-pointer hover:underline leading-5"
                            >
                                <AiOutlineLink />
                                Familiarize yourself with HTML & CSS.
                            </a>
                            <a
                                href="#second"
                                className="flex items-center gap-1 cursor-pointer hover:underline leading-5"
                            >
                                <AiOutlineLink />
                                Grasp what a programming language is.
                            </a>
                            <a
                                href="#third"
                                className="flex items-center gap-1 cursor-pointer hover:underline leading-5"
                            >
                                <AiOutlineLink />
                                Learn how to use Frontend Frameworks.
                            </a>
                            <a
                                href="#fourth"
                                className="flex items-center gap-1 cursor-pointer hover:underline leading-5"
                            >
                                <AiOutlineLink />
                                Learn by doing.
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div id="first" className="pt-8 flex flex-col gap-2">
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
                                            w3schools.com
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
                                                youtube.com
                                            </a>
                                        </p>
                                        <ul className="list-disc ml-16 mt-1">
                                            <li>Web Dev Simplified</li>
                                            <li>Leela Web Dev</li>
                                            <li>Net Ninja</li>
                                            <li>freeCodeCamp</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="second" className="pt-8 flex flex-col gap-2">
                            <h4 className="font-bold text-lg">
                                2. Grasp what a programming language is. - Learn
                                JavaScript.
                            </h4>
                            <p>
                                After learning HTML & CSS, you have to learn a
                                programming language, JavaScript so to say. In
                                JavaScript try to understand what's going on
                                when you writing code. Don't always do copy and
                                pasting code as a beginner. It'll make you a
                                good programmer also.
                            </p>
                            <p>
                                Just don't always search for a youtube video
                                when you encountered to a problem. From that I
                                meant not to refer to other resources. When you
                                have an error which doesn't make any sense,
                                please google it, it saves your time. But my
                                point is, always try code things on your own.
                                It'll improve your logical thinking.
                            </p>
                            <p>
                                {" "}
                                As an example think, you have learned how to do
                                mathematical operations, logging a message to
                                the browser console and utilizing control
                                structures such as if statements and for loops
                                with JavaScript. By using those you can actually
                                create a simple calculator right? So, think for
                                sometime how to do it and try it on your own.
                                Don't google those things as a beginner.
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
                                            w3schools.com
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
                                                youtube.com
                                            </a>
                                        </p>
                                        <ul className="list-disc ml-16 mt-1">
                                            <li>Web Dev Simplified</li>
                                            <li>JavaScript Mastery</li>
                                            <li>Net Ninja</li>
                                            <li>freeCodeCamp</li>
                                            <li>Traversy Media</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="third" className="pt-8 flex flex-col gap-2">
                            <h4 className="font-bold text-lg">
                                3. Learn how to use Frontend Frameworks.
                            </h4>
                            <p>
                                When talking about frameworks, they are just
                                reusable code written by some other developers.
                                There are CSS frameworks that you will learn
                                along your journey, such as Bootstrap and
                                Tailwind, which are very easy to understand.
                            </p>
                            <p>
                                However, when it comes to JavaScript libraries
                                like React, Angular, Vue, NextJs & etc, it can
                                be very confusing as a beginner. Those
                                frameworks will control how you write code and
                                will completely change your mind of coding
                                rather than writing some basic HTML, CSS &
                                JavaScript code.
                            </p>
                            <p>
                                So, try to understand the underlying logic of
                                those frameworks and get them in to your code.
                                Don't just do what the documentation says like a
                                trained machined.
                            </p>

                            <div>
                                <p className="font-bold text-slate-400">
                                    Resources
                                </p>
                                <div className="text-slate-400 ml-4">
                                    <p className="mb-1 flex items-center gap-2">
                                        <FaHandPointRight />{" "}
                                        <a
                                            href="https://react.dev/"
                                            target="_blank"
                                            className="underline"
                                        >
                                            react.dev
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaHandPointRight />{" "}
                                        <a
                                            href="https://nextjs.org/"
                                            target="_blank"
                                            className="underline"
                                        >
                                            nextjs.org
                                        </a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaHandPointRight />{" "}
                                        <a
                                            href="https://tailwindcss.com/"
                                            target="_blank"
                                            className="underline"
                                        >
                                            tailwindcss.com
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
                                                youtube.com
                                            </a>
                                        </p>
                                        <ul className="list-disc ml-16 mt-1">
                                            <li>Web Dev Simplified</li>
                                            <li>JavaScript Mastery</li>
                                            <li>Net Ninja</li>
                                            <li>freeCodeCamp</li>
                                            <li>Traversy Media</li>
                                            <li>Proacademy</li>
                                            <li>Leela Web Dev</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="fourth" className="pt-8 flex flex-col gap-2">
                            <h4 className="font-bold text-lg">
                                4. Learn by doing. - Do Projects.
                            </h4>
                            <p>
                                This is the most important thing to do in order
                                to become a well-experinced frontend developer.
                                People can't just learn every concept, memorize
                                them and use them when they obtained a job.
                                Nobody can obtain a job like that though. So,
                                you have to learn some core concepts and do some
                                projects by applying those concepts in that
                                project.
                            </p>
                            <p>
                                From the beginner I told don't try to memorize
                                things because doing projects will help you to
                                memorize things with zero effort. It's like
                                memorizing math formulas by solving hundreds of
                                problems right?
                            </p>
                            <p>
                                {" "}
                                When doing projects you will encounter some
                                circumstances which need new knowledge. So, you
                                can google those and learn new things as well.
                                As JavaScript has thousands of functions and
                                methods it's not practical to learn-then-apply
                                approach but apply-then-learn approach. I'll
                                provide you some resources to get some project
                                ideas after you leanred the core concepts of
                                frontend development.
                            </p>

                            <div>
                                <p className="font-bold text-slate-400">
                                    Resources
                                </p>
                                <div className="text-slate-400 ml-4">
                                    <p className="mb-1 flex items-center gap-2">
                                        <FaHandPointRight />{" "}
                                        <a
                                            href="https://www.codewithrandom.com/"
                                            target="_blank"
                                            className="underline"
                                        >
                                            codewithrandom.com
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
                                                youtube.com
                                            </a>
                                        </p>
                                        <ul className="list-disc ml-16 mt-1">
                                            <li>JavaScript Mastery</li>
                                            <li>Net Ninja</li>
                                            <li>freeCodeCamp</li>
                                            <li>Traversy Media</li>
                                            <li>EGATOR</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-slate-400">
                Hope you gained some knowledge from this blog post. Thank you
                for reading and good luck with your journey !
            </p>
        </motion.div>
    );
};

export default Frontendintro;
