import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Contexts
import CartContext from "contexts/CartContext";
import ProductDetailContext from "contexts/ProductDetailContext";
// Components
import { CustomButton } from "components/customUI/index";
// MUI
import { Box, Typography } from "@mui/material/index";
// Utils
import { formatPrice } from "utils/format";

const DetailContent = () => {
  const { t } = useTranslation();

  const { handleAddCart } = useContext(CartContext);
  const { productDetail } = useContext(ProductDetailContext);

  return (
    <>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h4">{productDetail.prod_name}</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2">{t("brand")} :</Typography>
            <Typography variant="subtitle2">
              {t(`${productDetail.brand_name}`)}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2">{t("productCat")} :</Typography>
            <Typography variant="subtitle2">
              {t(`${productDetail.cat_name}`)}
            </Typography>
          </Box>
          <br />
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2">{t("price")} :</Typography>
            <Typography variant="subtitle2">
              HKD {formatPrice(productDetail.price)}
            </Typography>
          </Box>
        </Box>

        <Box>
          <CustomButton
            variant="contained"
            color="primary"
            onClick={() => handleAddCart(productDetail.prod_id)}
            sx={{ margin: "unset" }}
          >
            {t("addToCart")}
          </CustomButton>

          <Link to="/product">
            <CustomButton variant="contained" color="primary">
              {t("exploreProducts")}
            </CustomButton>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default DetailContent;
