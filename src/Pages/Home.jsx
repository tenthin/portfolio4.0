import React from "react";
// import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className="">
        {/* <Navbar /> */}
        <div className="mt-20 w-full flex">
          <div className="left w-5/12 m-auto">
            <p className="text-3xl">Hello!</p>
            <h1 className="text-3xl mt-2">
              I'm Tenzin Thinley <br /> Frontend Developer
            </h1>
            <p className="text-xl text-stone-500 mt-4">
              A self-taught developer who happens to have a <br />{" "}
              <b> Masters in Physics</b>.
            </p>
            <p className="text-xl text-stone-500 mt-4">My Skills:</p>
            <div className="skills">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="right w-5/12 m-auto">
            <img
              className=""
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <About />
        </div>
        <div className="">
          <Skills />
        </div>
        <div className="">
          <Projects/>
        </div>
        <div className="">
          <Contact/>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
