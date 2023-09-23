import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import { P404 } from "../assets";

const NoPage = () => {
    return (
        <div className="px-8 min-h-screen flex flex-col justify-center items-center gap-6">
            <img src={P404} className="w-3/4 md:w-1/4 rounded-xl" />
            <div className="text-center">
                <h4 className="text-3xl font-bold mb-2">P404 error</h4>
                <p className="text-2xl font-medium">
                    Sorry! Your requested page is not found.
                </p>
                <Link
                    to=".."
                    className="mt-2 text-slate-400 text-lg font-bold flex justify-center items-center gap-1"
                >
                    <BsArrowLeft className="mt-1" /> <span className="underline">Go back</span>
                </Link>
            </div>
        </div>
    );
};

export default NoPage;
