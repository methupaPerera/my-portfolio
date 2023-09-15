import React from "react";
import { ProfileLarge } from "../components";

const Home = () => {
    return (
        <div
            id="home"
            className="min-h-screen flex justify-center flex-col gap-5 py-10 pl-10 md:pl-6"
        >
            <div className="border-l-[5px] border-white">
                <div className="md:block hidden mb-8 ml-1">
                    <ProfileLarge />
                </div>
                <div className="text-right ml-2 flex flex-col items-start">
                    <h1 className="text-3xl font-bold flex items-center -ml-2">
                        <span className="mt-1 mr-2 w-10 h-[5px] bg-white"></span>
                        Methupa Perera{" "}
                    </h1>
                    <h2 className="mt-6 text-slate-400 font-medium text-lg flex items-center -ml-2">
                        <span className="mr-2 w-10 h-[5px] bg-white"></span>
                        Making Things Interesting!{" "}
                    </h2>
                    <h3 className="mt-8 flex items-center -ml-2 font-medium text-lg">
                        <span className="mr-2 w-10 h-[5px] bg-white"></span>
                        18 Years{" "}
                    </h3>
                    <h4 className="mt-8 flex items-center -ml-2 font-medium text-lg">
                        <span className="mr-2 w-10 h-[5px] bg-white"></span>
                        Bandaragama, Sri Lanka{" "}
                    </h4>
                    <p className="mt-4 w-5/6 md:w-full flex items-center -ml-2 font-medium text-slate-400 text-left">
                        <span className="mr-2 w-[76px] h-[5px] bg-white"></span>
                        Interested in the entire frontend spectrum and working
                        on ambitious projects with positive people.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
