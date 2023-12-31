import React from "react";

import { Main, Home, About, Skills, Works, Blogs } from "../sections";

const PrimaryLayout = () => {
    return (
        <div className="w-full md:relative">
            <Main />
            <div className="md:pr-16 w-full md:w-1/2 relative md:absolute md:right-0 _gradient">
                <div className="h-full bg-inherit absolute"></div>
                <Home />
                <About />
                <Skills />
                <Works />
                <Blogs />
            </div>
        </div>
    );
};

export default PrimaryLayout;
