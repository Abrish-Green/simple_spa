import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
const SnackBar = ({ message = "", error = "" }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <>
      <div
        className={`absolute bottom-0 right-0 inline-flex justify-between p-2 m-2 border rounded-lg w-[95%] sm:w-[70%] md:w-[50%] lg:w-[40%] snack-bar items-center animated ${
          !open ? " fadeOut" : "fadeIn"
        }`}
      >
        <div className="text-4xl icon">
          {!error ? <AiFillCheckCircle /> : <AiFillCloseCircle />}
        </div>
        <div className="message"> {message ? message : "Default Message"}</div>
        <div className="close">
          <button
            onClick={() => setOpen(!open)}
            className="w-full p-1.5 border border-gray-400 rounded-full hover:border-black hover:border-2"
          >
            <GrClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default SnackBar;
