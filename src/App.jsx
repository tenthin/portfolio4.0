import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-stone-200 pt-24 pb-24">
      <Navbar />
      <div className="w-3/5 m-auto p-16 bg-stone-100 shadow-md shadow-stone-400 rounded-lg">
        <Home />
      </div>
    </div>
  );
};

export default App;
