"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";

import { dashboardRoutes } from "@/utils/routes";
import { validateEmail } from "@/utils/validation";
import { RegisterForm } from "@/types/auth";
import logo from "../../assets/logo/logo.svg";
import google from "../../assets/icons/google.svg";

const Register = () => {
  const router = useRouter();

  const registerForm = useForm<RegisterForm>({
    validateInputOnBlur: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: {
      name: (value) => (value.length < 1 ? "Please fill your name" : null),
      email: (value) => {
        return validateEmail(value);
      },
      password: (value) => (value.length < 8 ? "Password is too short" : null),
    },
  });

  return (
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
              <span>Name</span>
              <span className="text-alert-error">*</span>
            </p>
            <div className="w-full flex flex-col">
              <input
                {...registerForm.getInputProps("name")}
                type="text"
                placeholder="Enter your Name"
                className="w-96 h-12 px-2 border rounded outline-none border-gray-500"
              />
              {registerForm.errors.name ? (
                <span className="text-xs font-medium text-alert-error">
                  {registerForm.errors.name}
                </span>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-1 p-1 items-start">
            <p className="w-32 font-medium text-black">
              <span>Email</span>
              <span className="text-alert-error">*</span>
            </p>
            <div className="w-full flex flex-col">
              <input
                {...registerForm.getInputProps("email")}
                type="text"
                placeholder="Enter your Email"
                className="w-96 h-12 px-2 border rounded outline-none border-gray-500"
              />
              {registerForm.errors.email ? (
                <span className="text-xs font-medium text-alert-error">
                  {registerForm.errors.email}
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
                {...registerForm.getInputProps("password")}
                type="password"
                placeholder="Enter your Password"
                className="w-96 h-12 px-2 border rounded outline-none border-gray-500"
              />
              {registerForm.errors.password ? (
                <span className="text-xs font-medium text-alert-error">
                  {registerForm.errors.password}
                </span>
              ) : null}
            </div>
          </div>
          <div
            onClick={() => router.push(dashboardRoutes.dashboard)}
            className="flex p-3 w-full mt-3 h-12 hover:shadow-md cursor-pointer rounded justify-center bg-primary"
          >
            <span className="font-medium text-center">Register</span>
          </div>
          <div
            onClick={() => router.push(dashboardRoutes.dashboard)}
            className="flex p-3 w-full mt-3 h-12 gap-2 border hover:shadow-md cursor-pointer border-gray-400 rounded justify-center items-center bg-white"
          >
            <Image src={google} alt="google" width={28} height={28} />
            <span className="font-medium text-center">
              Continue with google
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
