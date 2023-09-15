import React from "react";

const SocialIcon = ({ link, children }) => {
    return (
        <a
            href={link}
            target="_blank"
            className="text-3xl text-slate-400 hover:text-white duration-300"
        >
            {children}
        </a>
    );
};

export default SocialIcon;
