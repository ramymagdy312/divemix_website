import PageBanner from "@/components/PageBanner";
import QuoteRequest from "@/components/QuoteRequest/QuoteRequest";
import AboutSection from "@/pages/home/AboutSection";

export default function About() {
  return (
    <main>
      <PageBanner adddress="About Us" />
      <div className="container">
        <AboutSection />
        <div className="homeSection">
          <QuoteRequest />
        </div>
      </div>
    </main>
  );
}
