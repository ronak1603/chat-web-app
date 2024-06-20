import { FEATURES } from "@/utils/constants";
import Image from "next/image";
import clsx from "clsx";

const FeatureSection = () => {
  return (
    <div className="flex flex-col gap-16 items-center mt-16">
      <span className="text-4xl font-semibold">
        Features for a better experience
      </span>
      <div className="flex justify-between items-center px-20 gap-4">
        {FEATURES.map((feature) => {
          return (
            <div key={feature.icon} className="flex gap-4 justify-between">
              <div
                className={clsx(
                  "rounded-full p-4 flex items-center w-max h-max",
                  feature.Heading === "Keep Safe and Private"
                    ? "bg-iconColor"
                    : "bg-primary"
                )}
              >
                <Image src={feature.icon} alt="icons" height={18} width={18} />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-medium">{feature.Heading}</span>
                <span className="flex-wrap text-sm break-words">
                  {feature.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
