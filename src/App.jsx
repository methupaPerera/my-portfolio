import React from "react";

import { Navbar, Particle } from "./components";
import PrimaryLayout from "./layouts/PrimaryLayout";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="text-white relative _gradient">
            <Navbar />
            <Routes>
                <Route index element={<PrimaryLayout />} />
            </Routes>
            <div className="absolute">
                <Particle />
            </div>
        </div>
    );
};

export default App;
