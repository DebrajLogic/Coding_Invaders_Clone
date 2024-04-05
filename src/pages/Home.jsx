import React from "react";
import { Link } from "react-router-dom";
import { AssignmentForm } from "../components";

function Home() {
  return (
    <main className="p-4 sm:p-6">
      {/* Container Nav Links */}
      <div className="flex">
        <Link
          className="p-2 sm:px-6 py-4 border-b-4 border-blue-500 hover:text-blue-500"
          to="/"
        >
          Course
        </Link>
        <Link
          className="p-2 sm:px-6 py-4 hover:border-b-4 hover:border-blue-500 hover:text-blue-500"
          to="/"
        >
          Progress
        </Link>
        <Link
          className="p-2 sm:px-6 py-4 hover:border-b-4 hover:border-blue-500 hover:text-blue-500"
          to="/"
        >
          Discussion
        </Link>
        <Link
          className="p-2 sm:px-6 py-4 hover:border-b-4 hover:border-blue-500 hover:text-blue-500"
          to="/"
        >
          Wiki
        </Link>
      </div>

      {/* Content Container */}
      <div className="border border-gray-300">
        {/* Breadcrumbs */}
        <div className="flex gap-2 sm:gap-4 p-2 text-sm sm:p-6 items-center border border-gray-300">
          <Link className="text-blue-500" to="/">
            Course
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>

          <Link className="text-blue-500" to="/">
            Module 30: Advanced Problem Solving
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>

          <Link className="text-blue-500" to="/">
            Assignment Module 30
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>

          <Link className="" to="/">
            Assignment
          </Link>
        </div>

        {/* Container Navigation Buttons */}
        <div className="flex border border-gray-300 m-6">
          <button className="border border-gray-300 flex sm:gap-2 items-center p-2 sm:px-6 py-4 hover:border-b-4 hover:border-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </button>
          <button className="border w-full flex justify-center py-4 border-b-4 border-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
            </svg>
          </button>
          <button className="border border-gray-100 w-full flex justify-center py-4 hover:border-b-4 hover:border-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="m3.196 12.87-.825.483a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 0 1-2.276 0L3.196 12.87Z" />
              <path d="m3.196 8.87-.825.483a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 0 1-2.276 0L3.196 8.87Z" />
              <path d="M10.38 1.103a.75.75 0 0 0-.76 0l-7.25 4.25a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .76 0l7.25-4.25a.75.75 0 0 0 0-1.294l-7.25-4.25Z" />
            </svg>
          </button>
          <button className="border border-gray-100 w-full flex justify-center py-4 hover:border-b-4 hover:border-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
            </svg>
          </button>
          <button className="border border-gray-100  flex sm:gap-2 items-center p-2 sm:px-6 py-4 hover:border-b-4 hover:border-blue-500">
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Assignment Section */}
        <div className="mx-2 sm:mx-10 md:mx-20 my-8">
          <h3 className="tracking-wide my-6">MODULE 30 ASSESSMENT</h3>
          <p className="my-4">
            This assignment has several steps. In the first step, you'll provide
            a response to the prompt. The other steps appear below the{" "}
            <b>Your Response</b> field.
          </p>
          <AssignmentForm />

          {/* Staff Grade Section */}
          <div className="flex relative my-4 px-6 py-4 border-2 border-t-8 border-gray-300">
            <div className="fixed bottom-4 right-2 px-2 py-1 rounded text-sm bg-gray-300 block">
              NOT AVAILABLE
            </div>
            <div className="flex gap-4 items-center text-gray-400">
              <p>2</p>
              <p>|</p>
              <p className="text-lg">Staff Grade</p>
            </div>
          </div>

          {/* Your Grade Section */}
          <div className="my-4 px-6 py-4 border-2 border-t-8 border-gray-300">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-blue-500"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-lg font-medium">Your Grade: Not Started</p>
            </div>
          </div>

          {/* Bottom Navigation Button */}
          <div className="my-12 flex items-center justify-center">
            <button className="flex items-center border border-gray-300 hover:border-b-4 hover:border-blue-500 px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Previous
            </button>
            <button className="flex items-center border border-gray-300 hover:border-b-4 hover:border-blue-500 px-8 py-2">
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
