import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full border-b-2 border-blue-500 py-4 px-10 flex justify-between items-center">
      {/* Header Left */}
      <div className="flex gap-10 items-center">
        <div className="flex gap-4">
          <Logo />
          <div className="hidden sm:flex flex-col">
            <h3>CI: Course3</h3>
            <h2 className="font-bold">Full Stack Course</h2>
          </div>
        </div>
        <nav className="hidden sm:flex m-0 py-1 hover:border-b-2 hover:border-blue-500">
          Discover New
        </nav>
      </div>

      {/* Header Right */}
      <div className="hidden sm:flex gap-10 items-center ">
        <Link to="/">Help</Link>
        <Link to="/">
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <p className="mr-4">debrajdey96</p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
