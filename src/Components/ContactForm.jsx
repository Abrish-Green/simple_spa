import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SnackBar from "./SnackBar";
import { isEmpty } from "../Utils";

const ContactFormSchema = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactFormSchema),
  });
  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState({
    username: null,
    email: null,
    message: null,
  });
  const HandleSubmit = (data) => {
    if (isEmpty(errors)) {
      setSuccess(true);
      setData(data);
    } else {
      setSuccess(false);
    }
    return data;
  };

  return (
    <>
      {isEmpty(errors) && success ? (
        <SnackBar message="Form submitted Successfully" />
      ) : null}
      {!isEmpty(errors) ? <SnackBar error="Invalid Input" /> : null}

      <form onSubmit={handleSubmit(HandleSubmit)}>
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
                  {...register("username")}
                />
              </div>
              <div className="flex items-center justify-between py-3 email">
                <div>Email</div>
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline"
                  {...register("email")}
                />
              </div>
              <div className="flex items-center justify-between py-3 username">
                <div>Message</div>
                <textarea
                  type="text"
                  placeholder="Message..."
                  className="px-2 py-1 border border-gray-300 rounded-md focus:outline"
                  {...register("message")}
                ></textarea>
              </div>

              <div className="flex items-center justify-center submit">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-10 py-2 font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
                >
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
