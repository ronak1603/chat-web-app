"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { fonts } from "@/utils/constants";
import mobile from "../../assets/logo/mobile.svg";
import { colors } from "@/utils/color-scheme";
import logo from "../../assets/logo/logo.svg";
import { dashboardRoutes } from "@/utils/routes";

const Signup = () => {
  const router = useRouter();

  return (
    <div
      className={`flex w-full h-screen bg-white font-[${fonts.primaryFont}]`}
    >
      <div
        className={`flex flex-col w-full justify-center gap-16 items-center bg-[${colors.primary}]`}
      >
        <div className="flex flex-col gap-2 mt-4">
          <span className="flex flex-col text-center font-semibold flex-wrap break-words text-3xl ">
            Social media shared today,
          </span>
          <span className="flex flex-col text-center font-semibold flex-wrap break-words text-3xl">
            tomorrow or by location
          </span>
        </div>
        <Image src={mobile} alt="Signup" />
      </div>
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
              <p className="w-32 text-sm font-medium text-black">
                <span>Name</span>
              </p>
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-96 h-12 px-2 border rounded outline-none border-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1 items-start">
              <p className="w-32 text-sm font-medium text-black">
                <span>Email</span>
              </p>
              <div className="w-full flex flex-col">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="w-96 h-12 px-2 border rounded outline-none border-gray-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 p-1 items-start">
              <p className="w-32 text-sm font-medium text-black">
                <span>Password</span>
              </p>
              <div className="w-full flex flex-col">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-96 h-12 px-2 border rounded outline-none border-gray-500"
                />
              </div>
            </div>
            <div
              onClick={() => router.push(dashboardRoutes.dashboard)}
              className={`flex p-3 w-full mt-2 h-12 hover:shadow-md cursor-pointer rounded justify-center bg-[${colors.primary}]`}
            >
              <span className="text-sm font-medium text-center">Register</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
