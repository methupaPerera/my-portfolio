import React from "react";

import { Navbar, Particle } from "./components";
import { PrimaryLayout } from "./layouts";
import { SkillsList } from "./pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="text-white relative _gradient">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<PrimaryLayout />} />
                </Route>
                <Route path="all-skills" element={<SkillsList />} />
            </Routes>
            <div className="absolute">
                <Particle />
            </div>
        </div>
    );
};

export default App;
