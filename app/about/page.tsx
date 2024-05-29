import PageBanner from "@/components/PageBanner";
import QuoteRequest from "@/components/QuoteRequest/QuoteRequest";
import AboutSection from "@/pages/home/AboutSection";
import MissionSection from "@/pages/home/MissionSection";

export default function About() {
  return (
    <main>
      <PageBanner adddress="About Us" />
      <AboutSection />
      <MissionSection />
    </main>
  );
}
