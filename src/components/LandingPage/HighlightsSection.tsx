import Image from "next/image";
import headerImage from "@/assets/logo/headerImage.svg";
import Link from "next/link";
import { authRoutes } from "@/utils/routes";

const HighlightSection = () => {
  return (
    <div className="flex justify-between mt-10">
      <div className="flex flex-col gap-4 p-20">
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">Start Chatting with</span>
          <span className="text-3xl font-semibold">Frineds, Anytime</span>
          <span className="text-3xl font-semibold">
            anywhere with BuzzCircle
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="flex-wrap mt-6">
            Great software that allows you to chat from any
          </span>
          <span className="flex-wrap">
            place at any time without any interruption.
          </span>
        </div>
        <div className="mt-6">
          <Link
            href={authRoutes.register}
            className="bg-primary hover:shadow-md text-white cursor-pointer p-3 rounded font-medium"
          >
            Start Chatting Now
          </Link>
        </div>
      </div>
      <div className="px-20">
        <Image src={headerImage} alt="headerImage" height={500} width={500} />
      </div>
    </div>
  );
};

export default HighlightSection;
