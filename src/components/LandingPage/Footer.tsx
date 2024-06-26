import { extraRoutes } from "@/utils/routes";
import Link from "next/link";

const FooterSection = () => {
  return (
    <div className="flex flex-col gap-1 mt-16">
      <div className="h-[1px] w-full p-0 bg-gray-200"></div>
      <div className="flex justify-between items-center">
        <span className="text-black font-medium">
          © Copyright 2021, All Rights Reserved
        </span>
        <div className="flex items-center gap-2">
          <Link
            href={extraRoutes.privacy}
            className="md:mr-0 cursor-pointer w-max h-max py-2 px-4 md:px-8"
          >
            <span className="cursor-pointer text-gray-400">Privacy</span>
          </Link>
          <Link
            href={extraRoutes.policies}
            className="cursor-pointer text-gray-400"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
