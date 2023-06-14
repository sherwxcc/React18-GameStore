// Contexts
import { ProductListProvider } from "contexts/ProductListContext";
// Components
import ProductList from "./ProductList";
// MUI
import { Typography } from "@mui/material/index";

function ProductListPage() {
  return (
    <>
      <Typography variant="h4">Products</Typography>
      <ProductListProvider>
        <ProductList />
      </ProductListProvider>
    </>
  );
}

export default ProductListPage;
