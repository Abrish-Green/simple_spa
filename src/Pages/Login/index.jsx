import React from "react";

const index = () => {
  return (
    <>
      <form>
        <div class="text-center w-full h-full">
          <div className="title font-bold text-4xl md:mx-2 sm:text-4xl lg:text-6xl py-10 text-center dark:text-white">
            Login
          </div>
          <div className="input-section flex items-center justify-center flex-col gap-1">
            <div className="username flex items-center py-3 px-6 gap-3 ">
              <label for="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="border py-1 px-2 border-gray-300 rounded-sm focus:outline"
                required
              />
            </div>
            <div className="password flex items-center py-3 px-6 gap-4">
              <label for="password">Password</label>
              <input
                type="password"
                placeHolder="Password"
                className="border py-1 px-2 border-gray-300 rounded-sm focus:outline"
                required
              />
            </div>
            <div className="submit">
              <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold py-2 px-10 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                Login
              </button>
            </div>
          </div>

          <div className="lostPassword m-4 flex justify-center">
            <a
              href="/forgotPassword"
              class=" border-t px-10 py-2 font-thin text-sky-400"
            >
              Forgot Password
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default index;
