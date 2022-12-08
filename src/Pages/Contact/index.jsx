import React from "react";

const index = () => {
  return (
    <>
      <form>
        <div class="text-center w-full h-full">
          <div className="title font-bold text-4xl md:mx-2 sm:text-4xl lg:text-6xl py-10 text-center dark:text-white">
            Contact Us
          </div>
          <div className="input-section flex items-center justify-center gap-1">
            <div className="content flex-col w-[40%]">
              <div className="username flex items-center justify-between py-3">
                <label for="username">
                  Username<span className="text-red-400 text-xl">*</span>:
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border py-1 px-2 border-gray-300 rounded-md focus:outline"
                  required
                />
              </div>
              <div className="email flex items-center justify-between py-3">
                <label for="Email">
                  Email<span className="text-red-400 text-xl">*</span>:
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border py-1 px-2 border-gray-300 rounded-md focus:outline"
                  required
                />
              </div>
              <div className="username flex items-center justify-between py-3">
                <label for="message">
                  Message<span className="text-red-400 text-xl">*</span>:
                </label>
                <textarea
                  type="text"
                  placeholder="Message..."
                  className="border py-1 px-2 border-gray-300 rounded-md focus:outline"
                  required
                ></textarea>
              </div>

              <div className="submit flex justify-center items-center">
                <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold py-2 px-10 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default index;
