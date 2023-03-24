// Contexts
import { ProductListProvider } from "contexts/ProductListContext";
// Components
import ProductList from "./ProductList";

function ProductListPage() {
  return (
    <>
      <div>List</div>
      <ProductListProvider>
        <ProductList />
      </ProductListProvider>
    </>
  );
}

export default ProductListPage;
