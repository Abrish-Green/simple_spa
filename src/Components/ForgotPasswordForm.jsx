import React from "react";

const ForgotPasswordForm = () => {
  return (
    <>
      <form>
        <div className="w-full h-full text-center">
          <div className="m-10 text-2xl font-bold text-center title md:mx-2 sm:text-3xl lg:text-4xl dark:text-white">
            Forgot Password
          </div>

          <div className="flex flex-col items-center justify-center gap-1 input-section">
            <div className="flex items-center px-6 pb-4 username ">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-2 py-1 border border-gray-300 rounded-sm focus:outline"
                required
              />
            </div>
            <div className="submit">
              <button className="flex items-center justify-center w-full px-10 py-2 font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
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
