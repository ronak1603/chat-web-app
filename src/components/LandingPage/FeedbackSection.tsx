import { colors } from "@/utils/color-scheme";

const FeedbackSection = () => {
  return (
    <div
      className={`flex flex-col gap-16 p-6 items-center mt-16 bg-[${colors.primary}] text-white rounded`}
    >
      <span className="text-4xl font-semibold mt-6">
        Our blessed client said about us 😍
      </span>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col p-6 gap-4 bg-white rounded items-center justify-center">
          <span className={`text-[${colors.primary}] text-sm font-medium`}>
            {"“Incredible Experience”"}
          </span>
          <span className="flex text-sm flex-wrap break-words text-black text-center">
            We had an incredible experience working with Mixland and were
            impressed they made such a big difference in only three weeks. Our
            team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the concept so quickly.
          </span>
        </div>
        <div className="flex flex-col gap-4 p-6 bg-white rounded items-center justify-center">
          <span className={`text-[${colors.primary}] text-sm font-medium`}>
            {"“Dependable, Responsive, Professional”"}
          </span>
          <span className="text-sm flex flex-wrap break-words text-black text-center">
            We had an incredible experience working with Mixland and were
            impressed they made such a big difference in only three weeks. Our
            team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the concept so quickly.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
