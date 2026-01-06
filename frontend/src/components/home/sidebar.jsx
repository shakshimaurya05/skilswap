import React from "react";
import { NavLink } from "react-router-dom"; 
import "./home.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-circle-user"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/discover"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-magnifying-glass"></i> Discover Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-skills"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-bars"></i> My Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-comment"></i> Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <i className="fa-solid fa-sun"></i> Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
