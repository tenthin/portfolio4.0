import React, { useState } from "react";
import Card from "../Components/ui/Card";

const projects = [
  { id: 1, title: "Expense Tracker", difficulty: "Easy", github:"https://github.com/tenthin/expenseTracker", livesite:"https://expensetrack01.netlify.app/" },
  { id: 2, title: "Weather App", difficulty: "Medium", github:"https://github.com/tenthin/WeatherApp", livesite:"https://weather-forecast-app01.netlify.app/"  },
  { id: 3, title: "Youtube Analyzer", difficulty: "Difficult", github:"https://github.com/tenthin/youtube-analyzer", livesite:"https://youtube-analyzer-01.netlify.app/"  },
];
const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.difficulty === filter);

  return (
    <>
      <div className="pb-20 w-4/5 m-auto scroll-mt-28" id="projects">
        <div className="flex items-center gap-4">
          <h1 className="text-6xl flex flex-[0.6] p-6 items-center justify-center bg-bg-dark text-textPrimary-dark dark:text-textPrimary-light dark:bg-bg-light">
            Project
          </h1>
          <p className="mt-4 text-xl flex-[1.4] text-stone-500 border border-bg-light dark:border-bg-dark p-4"></p>
        </div>

        <div className="flex justify-end items-center">
          <span className="ext-gray-400 mr-2">Filter:</span>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border px-4 py-2 dark:text-textPrimary-light"
          >
            <option value="all">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Difficult">Difficult</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              difficulty={project.difficulty}
              github={project.github}
              livesite={project.livesite}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
