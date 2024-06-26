import Signin from "@/components/Login";
import Image from "next/image";
import mobile from "@/assets/logo/mobile.svg";

const Login = () => {
  return (
    <div className="flex w-full h-screen bg-white font-primary">
      <div className="flex flex-col w-full justify-center gap-16 items-center bg-primary">
        <div className="flex flex-col gap-2 mt-4">
          <span className="flex flex-col text-center font-semibold flex-wrap break-words text-3xl ">
            Social media shared today,
          </span>
          <span className="flex flex-col text-center font-semibold flex-wrap break-words text-3xl">
            tomorrow or by location
          </span>
        </div>
        <Image src={mobile} alt="Signin" />
      </div>
      <Signin />
    </div>
  );
};

export default Login;
