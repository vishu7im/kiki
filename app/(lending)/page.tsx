import { LandingContent } from "@/components/Landing-content";
import { LandingHero } from "@/components/Landing-hero";
import { LandingNavbar } from "@/components/Landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
