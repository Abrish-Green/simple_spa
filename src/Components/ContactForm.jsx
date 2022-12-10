import React from "react";

const ContactForm = () => {
  return (
    <>
      <form>
        <div className="w-full h-full text-center">
          <div className="py-10 text-3xl font-bold text-center title md:mx-2 sm:text-2xl lg:text-4xl dark:text-white">
            Contact Us
          </div>
          <div className="flex items-center justify-center gap-1 input-section">
            <div className="flex-col content">
              <div className="flex justify-between gap-3 py-3 username ">
                <div>Username</div>
                <input
                  type="text"
                  placeholder="Username"
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline"
                  required
                />
              </div>
              <div className="flex items-center justify-between py-3 email">
                <div>Email</div>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline"
                  required
                />
              </div>
              <div className="flex items-center justify-between py-3 username">
                <div>Message</div>
                <textarea
                  type="text"
                  placeholder="Message..."
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline"
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-center submit">
                <button className="flex items-center justify-center w-full px-10 py-2 font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
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

export default ContactForm;
