import PageBanner from "@/components/PageBanner";
import QuoteRequest from "@/components/QuoteRequest/QuoteRequest";

export default function Contact() {
  return (
    <main>
      <PageBanner adddress="Contact Us" />
      <div className="container">
        <div className="homeSection">
          <QuoteRequest />
        </div>
      </div>
    </main>
  );
}
