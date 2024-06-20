import ChatSection from "@/components/LandingPage/ChatSection";
import FeedbackSection from "@/components/LandingPage/FeedbackSection";
import FooterSection from "@/components/LandingPage/Footer";
import HeaderComponent from "@/components/LandingPage/Header";
import HighlightSection from "@/components/LandingPage/HighlightsSection";
import FeatureSection from "@/components/LandingPage/FeatureSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-4 m-2 font-primary">
      <HeaderComponent />
      <HighlightSection />
      <FeatureSection />
      <ChatSection />
      <FeedbackSection />
      <FooterSection />
    </div>
  );
}
