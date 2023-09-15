import React from "react";
import { ProfileLarge } from "../components";

const Home = () => {
    return (
        <div
            id="home"
            className="py-10 pl-8 md:pl-6 min-h-screen flex flex-col justify-center gap-5"
        >
            <div className="border-l-[5px] border-white">
                <div className="mb-8 ml-1 hidden md:block">
                    <ProfileLarge />
                </div>
                <div className="ml-2 text-right flex flex-col items-start">
                    <h1 className="-ml-2 flex items-center text-3xl font-bold">
                        <span className="mt-1 mr-2 w-10 h-[5px] bg-white"></span>
                        Methupa Perera{" "}
                    </h1>
                    <h2 className="mt-6 -ml-2 flex items-center text-slate-400 font-medium text-lg">
                        <span className="mr-2 w-10 h-[5px] bg-white"></span>
                        Making Things Interesting!{" "}
                    </h2>
                    <h3 className="mt-8 -ml-2 flex items-center font-medium text-lg">
                        <span className="mr-2 w-10 h-[5px] bg-white"></span>
                        18 Years{" "}
                    </h3>
                    <h4 className="mt-8 -ml-2 flex items-center font-medium text-lg">
                        <span className="mr-2 w-10 h-[5px] bg-white"></span>
                        Bandaragama, Sri Lanka{" "}
                    </h4>
                    <p className="mt-4 -ml-2 w-full md:w-5/6 flex items-center font-medium text-slate-400 text-left">
                        <span className="mr-2 w-[76px] h-[5px] bg-white"></span>
                        Interested in the entire frontend and backend spectrum and working
                        on ambitious projects with positive people.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
