import React from "react";
import Home from "./Home";

const Main = () => {
    return (
        <div className="w-full">
            <div className="h-screen md:fixed left-0">
                <div className="flex justify-center items-center h-full w-full md:w-1/2 fixed">
                    <h1>Main content</h1>
                </div>
            </div>

            <div className="md:absolute right-0 w-full md:w-1/2 h-[200vh] relative _gradient">
                <div className="h-full bg-inherit absolute"></div> {/* This is the background for this area */}
                <Home />
            </div>
        </div>
    );
};

export default Main;
