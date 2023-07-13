import { useTranslation } from "react-i18next";
import styled from "styled-components";
// Contexts
import { ProductDetailProvider } from "contexts/ProductDetailContext";
// Components
import DetailContent from "./DetailContent";
import DetailImage from "./DetailImage";
// MUI
import { Box, Typography } from "@mui/material/index";

const ResBox = styled(Box)`
  display: flex;
  align-items: top;
  justify-content: center;
  column-gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    row-gap: 2rem;
    align-items: center;
    & > .detail-content {
      width: 100%;
    }
  }
`;

function ProductDetailPage() {
  const { t } = useTranslation();

  return (
    <div className="view">
      <ProductDetailProvider>
        <Typography variant="h4">{t("productDetail")}</Typography>
        <ResBox>
          <DetailImage />
          <DetailContent />
        </ResBox>
      </ProductDetailProvider>
    </div>
  );
}

export default ProductDetailPage;
