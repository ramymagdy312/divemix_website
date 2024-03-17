import PageBanner from "@/components/PageBanner";
import ProductsSection from "@/pages/home/ProductsSection";

export default function Products() {
  return (
    <main>
      <PageBanner adddress="Products" />
      <div className="container">
        <div className="homeSection">
          <ProductsSection />
        </div>
      </div>
    </main>
  );
}
