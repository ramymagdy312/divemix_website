import PageBanner from "@/components/PageBanner";
import QuoteRequest from "@/components/QuoteRequest/QuoteRequest";
import ApplicationsSection from "@/pages/home/ApplicationsSection";

export default function Applications() {
  return (
    <main>
      <PageBanner adddress="Applications" />
      <div className="container">
        <ApplicationsSection />
        <div className="homeSection">
          <QuoteRequest />
        </div>
      </div>
    </main>
  );
}
