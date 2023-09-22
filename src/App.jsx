import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, Particle } from "./components";
import { PrimaryLayout } from "./layouts";
import { SkillsList } from "./pages";

const App = () => {
    return (
        <div className="text-white select-none _gradient">
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
