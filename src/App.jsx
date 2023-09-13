import React from "react";

import { Main } from "./pages";
import { Navbar } from "./components";

const App = () => {
    return (
        <div className="text-white">
            <Navbar />
            <Main />
        </div>
    );
};

export default App;
