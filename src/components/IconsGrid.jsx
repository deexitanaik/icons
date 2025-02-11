import React from "react";
import "./IconsGrid.css";

const categories = [
  { icon: "https://cdn-icons-png.flaticon.com/512/1046/1046753.png", label: "Restaurants" },
  { icon: "https://cdn-icons-png.flaticon.com/512/2375/2375281.png", label: "Hotels" },
  { icon: "https://cdn-icons-png.flaticon.com/512/921/921079.png", label: "Beauty Spa" },
  { icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png", label: "Home Decor" },
  { icon: "https://cdn-icons-png.flaticon.com/512/2942/2942549.png", label: "Wedding Planning", highlight: true },
  { icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png", label: "Education" },
  { icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", label: "Rent & Hire" },
  { icon: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png", label: "Hospitals" },
  { icon: "https://cdn-icons-png.flaticon.com/512/3060/3060175.png", label: "Contractors" },
  { icon: "https://cdn-icons-png.flaticon.com/512/616/616554.png", label: "Pet Shops" },
  { icon: "https://cdn-icons-png.flaticon.com/512/2951/2951433.png", label: "PG/Hostels" },
  { icon: "https://cdn-icons-png.flaticon.com/512/2784/2784445.png", label: "Estate Agent" },
  { icon: "https://cdn-icons-png.flaticon.com/512/616/616490.png", label: "Dentists" },
  { icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png", label: "Gym" },
  { icon: "https://cdn-icons-png.flaticon.com/512/1006/1006774.png", label: "Loans" },
  { icon: "https://cdn-icons-png.flaticon.com/512/1576/1576627.png", label: "Event Organisers" },
  { icon: "https://cdn-icons-png.flaticon.com/512/2332/2332017.png", label: "Driving Schools" },
  { icon: "https://cdn-icons-png.flaticon.com/512/1995/1995539.png", label: "Packers & Movers" },
  { icon: "https://cdn-icons-png.flaticon.com/512/2541/2541998.png", label: "Courier Service" },
  { icon: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png", label: "Popular Categories", border: true },
];

const IconsGrid = () => {
  return (
    <div className="icons-grid">
      {categories.map((item, index) => (
        <div
          key={index}
          className={`icon-card ${item.highlight ? "highlighted" : ""} ${
            item.border ? "bordered" : ""
          }`}
        >
          <div className="icon-box">
            <img src={item.icon} alt={item.label} className="icon" />
          </div>
          <p className="label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsGrid;
