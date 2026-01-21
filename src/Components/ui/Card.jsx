import React from "react";

const Card = ({ title, difficulty, github, livesite }) => {
  return (
    <div
      className="border p-6 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition
"
    >
      <div className="h-40 bg-gray-100 rounded-xl mb-4 cursor-pointer" />

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      <span className="text-sm text-gray-500 capitalize">
        Difficulty: {difficulty}
      </span>
      <div className="flex gap-4 justify-end">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
        >
          GitHub
        </a>

        <a
          href={livesite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 bg-black text-white rounded-lg hover:opacity-90 transition"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Card;
