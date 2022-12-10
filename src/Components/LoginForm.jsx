import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import SnackBar from "./SnackBar";
import _ from "lodash";

const LoginFormSchema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  });
  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState({
    username: null,
    password: null,
  });
  const HandleSubmit = (data) => {
    if (_.isEmpty(errors)) {
      setSuccess(true);
      setData(data);
    } else {
      setSuccess(false);
    }
    return data;
  };

  return (
    <>
      {_.isEmpty(errors) && success ? (
        <SnackBar message="Valid input, Login now!" />
      ) : null}
      {!_.isEmpty(errors) ? <SnackBar error="Invalid Input" /> : null}

      <form onSubmit={handleSubmit(HandleSubmit)}>
        <div className="w-full h-full text-center">
          <div className="py-10 text-3xl font-bold text-center title md:mx-2 sm:text-2xl lg:text-5xl dark:text-white">
            Login
          </div>
          <div className="flex flex-col items-center justify-center gap-1 input-section">
            <div className="flex items-center gap-3 px-6 py-3 username ">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="px-2 py-1 border border-gray-300 rounded-md focus:outline"
                {...register("username")}
              />
            </div>
            <div className="flex items-center gap-4 px-6 py-3 password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="px-2 py-1 border border-gray-300 rounded-md focus:outline"
                {...register("password")}
              />
            </div>
            <div className="submit">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-10 py-2 font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
              >
                Login
              </button>
            </div>
          </div>

          <div className="flex justify-center m-4 lostPassword">
            <a
              href="/forgotPassword"
              className="px-10 py-2 font-thin border-t text-sky-400"
            >
              Forgot Password
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
