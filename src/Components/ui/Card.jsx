import React from "react";

const Card = ({ title, difficulty }) => {
  return (
    <div className="border p-6 rounded-2xl hover:shadow-lg transition">
      <div className="h-40 bg-gray-100 rounded-xl mb-4 cursor-pointer" />

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      <span className="text-sm text-gray-500 capitalize">
        Difficulty: {difficulty}
      </span>
    </div>
  );
};

export default Card;
