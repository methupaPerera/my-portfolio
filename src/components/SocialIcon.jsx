import React from "react";

const SocialIcon = ({ name, link, children }) => {
    const className =
        name === "Email"
            ? "text-[2.48rem] -mt-[4.5px] text-slate-400 hover:text-white duration-300"
            : "text-3xl text-slate-400 hover:text-white duration-300";

    return (
        <a href={link} target="_blank" className={className}>
            {children}
        </a>
    );
};

export default SocialIcon;
