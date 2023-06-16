import { useTranslation } from "react-i18next";
// Contexts
import { ProductDetailProvider } from "contexts/ProductDetailContext";
// Components
import DetailContent from "./DetailContent";
import DetailImage from "./DetailImage";
// MUI
import { Box, Typography } from "@mui/material/index";

function ProductDetailPage() {
  const { t } = useTranslation();

  return (
    <>
      <ProductDetailProvider>
        <Typography variant="h4">{t("productDetail")}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "top",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <DetailImage />
          <DetailContent />
        </Box>
      </ProductDetailProvider>
    </>
  );
}

export default ProductDetailPage;
