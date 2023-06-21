import { useTranslation } from "react-i18next";
// Contexts
import { ProductListProvider } from "contexts/ProductListContext";
// Components
import ProductList from "./ProductList";
// MUI
import { Typography } from "@mui/material/index";

function ProductListPage() {
  const { t } = useTranslation();

  return (
    <div className="view">
      <Typography variant="h4">{t("products")}</Typography>
      <ProductListProvider>
        <ProductList />
      </ProductListProvider>
    </div>
  );
}

export default ProductListPage;
