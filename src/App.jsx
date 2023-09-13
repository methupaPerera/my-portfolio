import React, { useEffect, useState } from "react";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";

const App = () => {
    const [isNav, setNav] = useState(false);

    useEffect(() => {
        const trackResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setNav(true);
            } else {
                setNav(false);
            }
        };

        window.addEventListener("resize", trackResize);
        trackResize();

        return () => window.removeEventListener("resize", trackResize);
    }, []);

    return (
        <div className="text-white">
            {isNav && <Navbar />}
            <Main />
        </div>
    );
};

export default App;
