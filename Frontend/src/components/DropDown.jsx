import  { useState } from "react";
import "../css/DropDown.css"



export default function DropDown()  {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const menuItems = [
    "Item 1",
    "Item 2",
    "Item 3",
  ];

  return (
    <div className="dropdown-menu">
        <h1>dgbgvh</h1>
      <button onClick={toggleMenu}>Menu</button>
      <ul className={`dropdown-items ${isExpanded ? "expanded" : ""}`}>
        {menuItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

