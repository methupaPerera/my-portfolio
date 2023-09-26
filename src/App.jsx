import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, Particle } from "./components";
import { BlogLayout, PrimaryLayout } from "./layouts";
import { SkillsList, WorksList, NoPage, BlogsList, SingleBlog } from "./pages";

const App = () => {
    return (
        <div id="container" className="text-white select-none _gradient">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<PrimaryLayout />} />
                </Route>
                <Route path="all-skills" element={<SkillsList />} />
                <Route path="all-works" element={<WorksList />} />
                <Route path="all-blogs" element={<BlogLayout />}>
                    <Route index element={<BlogsList />} />
                    <Route path=":id" element={<SingleBlog />} />
                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>
            <div className="absolute">
                <Particle />
            </div>
        </div>
    );
};

export default App;
