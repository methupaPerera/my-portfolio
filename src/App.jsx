import React from "react";

import { Navbar } from "./components";
import PrimaryLayout from "./layouts/PrimaryLayout";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="text-white _gradient">
            <Navbar />
            <Routes>
                <Route index element={<PrimaryLayout />} />
            </Routes>
        </div>
    );
};

export default App;
