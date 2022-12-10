import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import _ from "lodash";
import SnackBar from "./SnackBar";
const ForgotPasswordForm = () => {
  const ResetPasswordFormSchema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ResetPasswordFormSchema),
  });

  const [success, setSuccess] = React.useState(false);
  const [data, setData] = React.useState({
    email: null,
  });
  const HandlePasswordReset = (data) => {
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
        <SnackBar message="Resetting Email Found" />
      ) : null}
      {!_.isEmpty(errors) ? (
        <SnackBar error={errors.email ? errors.email.message : ""} />
      ) : null}
      <form onSubmit={handleSubmit(HandlePasswordReset)}>
        <div className="w-full h-full text-center">
          <div className="m-10 text-2xl font-bold text-center title md:mx-2 sm:text-3xl lg:text-4xl dark:text-white">
            Forgot Password
          </div>

          <div className="flex flex-col items-center justify-center gap-1 input-section">
            <div className="flex items-center px-6 pb-4 username ">
              <input
                type="type"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full px-2 py-1 border border-gray-300 rounded-sm focus:outline"
              />
            </div>
            <div className="submit">
              <button
                type="submit"
                className="flex items-center justify-center w-full px-10 py-2 font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
              >
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
