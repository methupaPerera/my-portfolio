import React from "react";

import { Main, Home, About, Skills } from "../pages";

const PrimaryLayout = () => {
    return (
        <div className="w-full relative">
            <Main />
            <div className="w-full md:w-1/2 relative md:absolute right-0 _gradient">
                <div className="h-full bg-inherit absolute"></div>
                <Home />
                <About />
                <Skills />
            </div>
        </div>
    );
};

export default PrimaryLayout;
