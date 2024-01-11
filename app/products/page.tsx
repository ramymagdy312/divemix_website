import PageBanner from "@/components/PageBanner";
import QuoteRequest from "@/components/QuoteRequest/QuoteRequest";

export default function Products() {
  return (
    <main>
      <PageBanner adddress="Products" />
      <div className="container">
        <div className="homeSection">
          <QuoteRequest />
        </div>
      </div>
    </main>
  );
}
