
import React from "react";
import CategoryCard from "./CategoryCard";
import weddingIcon from "../assets/wedding.png"; // Repl

const categories = [
  { icon: hotelIcon, label: "Hotels" },
  { icon: weddingIcon, label: "Wedding Planning", selected: true },
  { icon: "../assets/restaurant.png", label: "Restaurants" },
  { icon: "../assets/education.png", label: "Education" },
  { icon: "../assets/gym.png", label: "Gym" },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-6">
      {categories.map((cat, index) => (
        <CategoryCard key={index} {...cat} />
      ))}
    </div>
  );
};

export default CategoryGrid;
