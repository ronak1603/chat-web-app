import Image from "next/image";
import chatImage from "../../assets/logo/chatImage.svg";
import Link from "next/link";
import { colors } from "@/utils/color-scheme";
import { authRoutes } from "@/utils/routes";

const ChatSection = () => {
  return (
    <div className="flex justify-between mt-16">
      <div className="flex flex-col gap-4 p-20">
        <div className="flex flex-col gap-4">
          <span className="text-3xl font-semibold">Start selling directly</span>
          <span className="text-3xl font-semibold">inside conversations</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="flex-wrap mt-6 text-sm">
            There are many variations of passages of Lorem Ipsum available,
          </span>
          <span className="flex-wrap text-sm">
            but the majority have suffered all injected humour or randomised
          </span>
          <span className="flex-wrap text-sm">
            words which do not look even slightly believable.
          </span>
        </div>
        <div className="mt-6">
          <Link
            href={authRoutes.register}
            className={`bg-[${colors.primary}] hover:shadow-md text-white cursor-pointer p-3 text-sm rounded font-medium`}
          >
            Start Chatting Now
          </Link>
        </div>
      </div>
      <div className="px-20">
        <Image src={chatImage} alt="headerImage" height={500} width={600} />
      </div>
    </div>
  );
};

export default ChatSection;
