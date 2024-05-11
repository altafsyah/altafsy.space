import { NavLink } from "@remix-run/react";
import clsx from "clsx";

export default function Navbar() {
  return (
    <nav className="w-fit px-6 mx-auto py-2 rounded-full mt-10 bg-accent/50 backdrop-blur border border-accent">
      <ul className="flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return clsx(
                isActive ? "text-secondary font-semibold" : "text-gray-400",
                "transition-colors duration-150"
              );
            }}>
            /Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return clsx(
                isActive ? "text-secondary font-semibold" : "text-gray-400",
                "transition-colors duration-150"
              );
            }}>
            /About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/works"
            className={({ isActive }) => {
              return clsx(
                isActive ? "text-secondary font-semibold" : "text-gray-400",
                "transition-colors duration-150"
              );
            }}>
            /Works
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/thoughts"
            className={({ isActive }) => {
              return clsx(
                isActive ? "text-secondary font-semibold" : "text-gray-400",
                "transition-colors duration-150"
              );
            }}>
            /Thoughts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
