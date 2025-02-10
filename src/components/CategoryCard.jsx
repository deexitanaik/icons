
import React from "react";

const CategoryCard = ({ icon, label, selected }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-24 h-24 p-4 rounded-xl shadow-md 
      transition-transform duration-300 ${
        selected ? "border-2 border-pink-500 scale-105" : "hover:scale-105"
      }`}
    >
      <img src={icon} alt={label} className="w-10 h-10" />
      <p className="mt-2 text-sm text-gray-700">{label}</p>
    </div>
  );
};

export default CategoryCard;
