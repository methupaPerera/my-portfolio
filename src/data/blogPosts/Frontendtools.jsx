import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code } from "../../components";

import { FaHandPointRight } from "react-icons/fa";

const codeJsx = {
    1: `<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>`,
    2: `<h1 class="animate__animated animate__bounce">An animated element</h1>`,
    3: `<form action="https://formspree.io/f/{form_id}" method="post">
    <label for="email">Your Email</label>
    <input name="Email" id="email" type="email">
    <button type="submit">Submit</button>
</form>`,
};

const Frontendtools = () => {
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
                Frontend tools, which will make your life easier !
            </h1>

            <div className="flex flex-col gap-6">
                <p>
                    When I was an absolute beginner, I used to code everything
                    manually. But months later, I started wondering if there was
                    pre-written code available on the internet to boost my
                    workflow. Then, after doing some research and working on
                    projects, I found some cool stuff. Now, I'm going to share
                    those with you!
                </p>

                <div className="flex flex-col gap-6">
                    <div>
                        <h5 className="font-bold text-2xl mb-1">
                            1. Adding Animations.
                        </h5>
                        <p>
                            Writing animations in pure CSS can be quite
                            cumbersome, right? The tools that I'm going to
                            provide you with are like libraries where you can
                            simply copy and paste the pre-written code.
                        </p>
                        <ul className="mt-2 ml-12 list-disc flex flex-col gap-6">
                            <li>
                                <p className="text-lg font-bold text-slate-400">
                                    Animate CSS
                                </p>
                                <p className="mb-3">
                                    You can use this library by downloading the
                                    files of the library or through the CDN. You
                                    can use this in ReactJs too.
                                </p>
                                <Code>
                                    <code>{codeJsx[1]}</code>
                                </Code>
                                <p className="my-3">
                                    Then, you can use their classes like this.
                                </p>
                                <Code>
                                    <code>{codeJsx[2]}</code>
                                </Code>
                            </li>

                            <li>
                                <p className="text-lg font-bold text-slate-400">
                                    Animista
                                </p>
                                <p className="mb-2">
                                    This CSS animation library will generate CSS
                                    animation code for you. Just visit their
                                    website using{" "}
                                    <a
                                        href="https://animista.net"
                                        className="text-slate-400 underline"
                                        target="_blank"
                                    >
                                        animista.net
                                    </a>{" "}
                                    and try some of their animations.
                                </p>
                            </li>

                            <li>
                                <p className="text-lg font-bold text-slate-400">
                                    Framer Motion
                                </p>
                                <p className="mb-2">
                                    You can create amazing animations in your
                                    React application using this library. This
                                    library is a animation library for ReactJs.
                                    So, you can install the necessary
                                    dependencies by running{" "}
                                </p>
                                <Code>
                                    <code>npm i framer-motion</code>
                                </Code>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-2xl mb-1">
                            2. Fonts & Icons.
                        </h5>
                        <p>
                            Fonts and icons play a huge role in user experience.
                            So, you have to chose them very carefully in your
                            website.
                        </p>
                        <ul className="mt-2 ml-12 list-disc flex flex-col gap-6">
                            <li>
                                <p className="text-lg font-bold text-slate-400">
                                    Fonts
                                </p>
                                <p className="mb-3">
                                    Google fonts is the most recommended font
                                    library on the internet. There are numorous
                                    fonts in this website. Please take a look at
                                    this website by using&nbsp;
                                    <a
                                        href="https://fonts.google.com/"
                                        className="text-slate-400 underline"
                                    >
                                        fonts.google.com
                                    </a>
                                </p>
                            </li>

                            <li>
                                <p className="text-lg font-bold text-slate-400">
                                    Icons
                                </p>
                                <p className="mb-1">
                                    There are great icon libraries on the
                                    internet. But I'm going to provide you the
                                    libraries which I'm personally used. Please
                                    just visit the websites of those libraries
                                    and try to read their user guide to use them
                                    in your project.
                                </p>
                                <div className="ml-6 flex flex-col">
                                    <a
                                        href="https://icons.getbootstrap.com/"
                                        className="text-slate-400 underline flex items-center gap-1"
                                        target="_blank"
                                    >
                                        <FaHandPointRight />{" "}
                                        icons.getbootstrap.com
                                    </a>
                                    <a
                                        href="https://icones.js.org/"
                                        className="text-slate-400 underline flex items-center gap-1"
                                        target="_blank"
                                    >
                                        <FaHandPointRight /> icones.js.org
                                    </a>
                                    <a
                                        href="https://react-icons.github.io/react-icons/"
                                        className="text-slate-400 underline flex items-center gap-1"
                                        target="_blank"
                                    >
                                        <FaHandPointRight />{" "}
                                        react-icons.github.io/react-icons
                                    </a>
                                    <a
                                        href="https://heroicons.com/"
                                        className="text-slate-400 underline flex items-center gap-1"
                                        target="_blank"
                                    >
                                        <FaHandPointRight /> heroicons.com
                                    </a>
                                    <a
                                        href="https://fontawesome.com/"
                                        className="text-slate-400 underline flex items-center gap-1"
                                        target="_blank"
                                    >
                                        <FaHandPointRight /> fontawesome.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-2xl mb-1">3. Images.</h5>
                        <p>
                            Imagine you wanted to add some images to your
                            project, but you couldn't find copyright-free images
                            on the internet. Fortunately, there are great
                            websites available where you can find such images.
                        </p>
                        <div className="ml-6 flex flex-col">
                            <a
                                href="https://undraw.co/"
                                className="text-slate-400 underline flex items-center gap-1"
                                target="_blank"
                            >
                                <FaHandPointRight /> undraw.co
                            </a>
                            <a
                                href="https://unsplash.com/"
                                className="text-slate-400 underline flex items-center gap-1"
                                target="_blank"
                            >
                                <FaHandPointRight /> unsplash.com
                            </a>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold text-2xl mb-1">
                            4. Server Code Free Forms.
                        </h5>
                        <p>
                            As a frontend developer you couldn't be able to
                            handle form data and send them as a email to a user.
                            But there's a great tool called{" "}
                            <a
                                href="https://formspree.io/"
                                className="text-slate-400 underline"
                                target="_blank"
                            >
                                formspree.io
                            </a>{" "}
                            which you can use in your projects.
                        </p>
                        <p className="my-3">
                            You have to create a new account in formspree in
                            order to use their services. After creating an
                            account, you can create a new form by utilizing
                            their user guide.
                        </p>
                        <p className="mb-3">
                            Then you can create a form in your HTML code and set
                            the action attribute value with the provided form
                            link of formspree.
                        </p>

                        <Code>
                            <code>{codeJsx[3]}</code>
                        </Code>
                    </div>
                </div>
            </div>

            <p className="text-slate-400">
                Hope you gained some knowledge from this blog post. Thank you
                for reading !
            </p>
        </motion.div>
    );
};

export default Frontendtools;
