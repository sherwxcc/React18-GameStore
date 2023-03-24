import { ProductDetailProvider } from "contexts/ProductDetailContext";
import DetailContent from "./DetailContent";
import DetailImage from "./DetailImage";

function ProductDetailPage() {
  return (
    <>
      <ProductDetailProvider>
        <DetailImage />
        <DetailContent />
      </ProductDetailProvider>
    </>
  );
}

export default ProductDetailPage;
