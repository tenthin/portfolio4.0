import React from "react";

const About = () => {
  return (
    <>
      <div className="pb-20 w-4/5 m-auto flex items-center gap-4" id="aboutme">
        <h1 className="text-6xl flex flex-[0.6] p-6 items-center justify-center bg-bg-dark text-textPrimary-dark dark:text-textPrimary-light dark:bg-bg-light">
          About Me
        </h1>
        <p className="mt-4 text-xl flex-[1.4] text-stone-500border border-bg-dark dark:border-bg-light p-4">
          I’m a frontend developer focused on building clean, functional, and
          user-friendly web applications using JavaScript and React. I enjoy
          turning ideas into working products and learning by building
          real-world projects, from UI design to API integration.
          <br />
          Currently, I’m focused on growing as a frontend developer by shipping
          projects, improving my problem-solving skills, and preparing for
          entry-level opportunities where I can learn, contribute, and grow with
          a team.
        </p>
      </div>
    </>
  );
};

export default About;
