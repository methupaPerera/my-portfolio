import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isBorder, setBorder] = useState(false);
    useEffect(() => {
        const trackScroll = () => {
            if (scrollY > 0) {
                setBorder(true);
            } else {
                setBorder(false);
            }
        };

        window.addEventListener("scroll", trackScroll);
        return () => window.removeEventListener("scroll", trackScroll);
    }, []);

    return (
        <div className="h-20 flex items-center backdrop-blur-sm fixed z-50 w-full">
            {isBorder && <div className="h-[1px] opacity-25 w-full absolute bottom-0 bg-white nav-animate"></div>}
            <p>Navbar</p>
        </div>
    );
};

export default Navbar;
