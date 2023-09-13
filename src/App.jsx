import React, { useEffect, useState } from "react";

import { Main } from "./pages";
import { Navbar } from "./components";

const App = () => {
    useEffect(() => {
        // const trackResize = () => {
        //     const width = window.innerWidth;
        //     if (width < 768) {
        //         setNav(true);
        //     } else {
        //         setNav(false);
        //     }
        // };

        // window.addEventListener("resize", trackResize);
        // trackResize();

        // return () => window.removeEventListener("resize", trackResize);
    }, []);

    return (
        <div className="text-white">
            <Navbar />
            <Main />
        </div>
    );
};

export default App;
