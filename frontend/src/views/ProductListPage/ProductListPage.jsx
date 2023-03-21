import { ProductProvider } from "contexts/ProductContext";
import ProductList from "./ProductList";
import { Box } from "@mui/material/index";

function ProductListPage() {
  return (
    <>
      <Box sx={{ maxWidth: "1100px", margin: "auto" }}>
        <div>List</div>
        <ProductProvider>
          <ProductList />
        </ProductProvider>
      </Box>
    </>
  );
}

export default ProductListPage;
