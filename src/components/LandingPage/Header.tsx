import Image from "next/image";
import logo from "../../assets/logo/logo.svg";
import { HEADER_NAV_LINKS } from "@/utils/constants";
import Link from "next/link";
import { authRoutes } from "@/utils/routes";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <Image src={logo} alt="logo" width={150} height={400} />
      <div className="flex gap-12 items-center">
        {HEADER_NAV_LINKS.map((navitem) => {
          return (
            <Link href={navitem.link} key={navitem.label}>
              <span className="text-lg">{navitem.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={authRoutes.login}
          className="md:mr-0 cursor-pointer w-max h-max py-2 px-4 md:px-8"
        >
          <span className="md:text-lg text-sm font-medium text-gray-dark hover:text-black">
            Log In
          </span>
        </Link>
        <Link
          href={authRoutes.register}
          className="bg-black hover:shadow-md hover:bg-gray-dark border-2 border-black text-white md:mr-0 cursor-pointer w-max h-max py-2 px-4 md:px-4 rounded md:text-lg text-sm font-medium"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
