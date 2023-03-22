import { ProductProvider } from "contexts/ProductContext";
import ProductList from "./ProductList";

function ProductListPage() {
  return (
    <>
      <div>List</div>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </>
  );
}

export default ProductListPage;
