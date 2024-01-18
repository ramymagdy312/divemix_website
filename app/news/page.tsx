import PageBanner from "@/components/PageBanner";
import QuoteRequest from "@/components/QuoteRequest/QuoteRequest";
import ServicesSection from "@/pages/home/ServicesSection";

export default function Services() {
  return (
    <main>
      <PageBanner adddress="News" />
      <div className="container">
        <ServicesSection />
        <div className="homeSection">
          <QuoteRequest />
        </div>
      </div>
    </main>
  );
}
