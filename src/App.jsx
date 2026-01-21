import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/layout/Navbar";

const App = () => {
  return (
    <div className="bg-bg-light dark:bg-bg-dark text-textPrimary-light dark:text-textPrimary-dark">
        <Navbar />
        <div className="">
          <Home />
        </div>
    </div>
  );
};

export default App;
