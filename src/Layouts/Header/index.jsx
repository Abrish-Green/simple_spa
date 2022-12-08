import React from "react";
import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg shadow-md w-full py-2 bg-white flex justify-between items-center">
          <div className="small-screen justify-end mx-4 md:hidden">
            <button
              class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
              type="button"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
          </div>
          <h1 class="text-slate-900 font-extrabold text-4xl md:mx-4 sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            <a href="/login">SPA</a>
          </h1>
          <div className="contact mx-3 right-0 inline-flex gap-2">
            <a
              href="/login"
              className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2  text-white font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            >
              Login
            </a>
            <a
              href="/contact"
              className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2  text-white font-semibold py-2 px-4 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            >
              Contact us
            </a>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default index;
