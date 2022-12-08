import React from "react";

const ForgotPasswordForm = () => {
  return (
    <>
      <form>
        <div class="text-center w-full h-full">
          <div className="title font-bold text-2xl md:mx-2 sm:text-3xl lg:text-4xl m-10 text-center dark:text-white">
            Forgot Password
          </div>

          <div className="input-section flex items-center justify-center flex-col gap-1">
            <div className="username flex items-center pb-4 px-6 ">
              <input
                type="email"
                placeholder="Email"
                className="border py-1 px-2 w-full border-gray-300 rounded-sm focus:outline"
                required
              />
            </div>
            <div className="submit">
              <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold py-2 px-10 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
