import { useContext } from "react";
// Contexts
import ProductDetailContext from "contexts/ProductDetailContext";
// MUI
import { Box } from "@mui/material/index";

const DetailImage = () => {
  const { productDetail } = useContext(ProductDetailContext);

  return (
    <>
      {productDetail.img_url && (
        <Box key={productDetail} sx={{ width: "40%", maxWidth: "350px" }}>
          <img
            src={require(`assets/images/products/${productDetail?.img_url}.png`)}
            style={{ borderRadius: "15px", objectFit: "cover", width: "100%" }}
          />
        </Box>
      )}
    </>
  );
};

export default DetailImage;
