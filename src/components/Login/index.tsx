"use client";

import { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";

import { dashboardRoutes } from "@/utils/routes";
import { LoginForm } from "@/types/auth";
import { validateEmail } from "@/utils/validation";
import mobile from "../../assets/logo/mobile.svg";
import logo from "../../assets/logo/logo.svg";

const Signin = () => {
  const router = useRouter();

  const loginForm = useForm<LoginForm>({
    validateInputOnBlur: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => {
        return validateEmail(value);
      },
      password: (value) => (value.length < 8 ? "Password is too short" : null),
    },
  });

  return (
    <Fragment>
      <div className="flex gap-4 items-center justify-center w-full">
        <form>
          <div className="flex flex-col justify-center gap-3 items-center">
            <Image
              src={logo}
              alt="logo"
              width={150}
              height={100}
              className="my-6"
            />
            {/* <span className="text-2xl my-6 font-semibold ">Create Account</span> */}
            <div className="flex flex-col gap-1 p-1 items-start">
              <p className="w-32 font-medium text-black">
                <span>Email</span>
                <span className="text-alert-error">*</span>
              </p>
              <div className="w-full flex flex-col">
                <input
                  {...loginForm.getInputProps("email")}
                  type="text"
                  placeholder="Enter your Email"
                  className="w-96 h-12 px-2 border rounded outline-none border-gray-500"
                />
                {loginForm.errors.email ? (
                  <span className="text-xs font-medium text-alert-error">
                    {loginForm.errors.email}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1 items-start">
              <p className="w-32 font-medium text-black">
                <span>Password</span>
                <span className="text-alert-error">*</span>
              </p>
              <div className="w-full flex flex-col">
                <input
                  {...loginForm.getInputProps("password")}
                  type="password"
                  placeholder="Enter your Password"
                  className="w-96 h-12 px-2 border rounded outline-none border-gray-500"
                />
                {loginForm.errors.password ? (
                  <span className="text-xs font-medium text-alert-error">
                    {loginForm.errors.password}
                  </span>
                ) : null}
              </div>
            </div>
            <div
              onClick={() => router.push(dashboardRoutes.dashboard)}
              className="flex p-3 w-full mt-3 h-12 hover:shadow-md cursor-pointer rounded justify-center bg-primary"
            >
              <span className="font-medium text-center">Login</span>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Signin;
