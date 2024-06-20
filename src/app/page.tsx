import ChatSection from "@/components/LandingPage/ChatSection";
import FeedbackSection from "@/components/LandingPage/FeedbackSection";
import FooterSection from "@/components/LandingPage/Footer";
import HeaderComponent from "@/components/LandingPage/Header";
import HighlightSection from "@/components/LandingPage/HighlightsSection";
import FeatureSection from "@/components/LandingPage/FeatureSection";
import { fonts } from "@/utils/constants";

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col p-4 m-2 font-[${fonts.primaryFont}]`}
    >
      <HeaderComponent />
      <HighlightSection />
      <FeatureSection />
      <ChatSection />
      <FeedbackSection />
      <FooterSection />
    </div>
  );
}
//layout & pages
