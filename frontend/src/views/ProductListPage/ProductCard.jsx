import { useContext } from "react";

import ColorContext from "contexts/ColorContext";

import { CustomProductCard } from "components/customUI/index";
import {
  Box,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material/index";

const ProductCard = ({ el }) => {
  const { theme } = useContext(ColorContext);

  return (
    <>
      <CustomProductCard key={el.prod_id} theme={theme}>
        <CardMedia
          component="img"
          image={`/static/images/products/${el.img_url}.png`}
          alt={el.prod_name}
          sx={{
            maxHeight: "200px",
            maxWidth: "100%",
            height: "100%",
            width: "100%",
            borderRadius: "2px",
            objectFit: "contain",
            background: "#fff",
          }}
        ></CardMedia>
        <Box sx={{ padding: "0 1rem 1rem 1rem" }}>
          <Box sx={{ height: "max-content", minHeight: "4rem" }}>
            <Typography
              variant="body1"
              color="text.primary"
              sx={{
                marginTop: "1rem",
                marginBottom: "1rem",
                lineHeight: "1.3rem",
                width: "20ch",
                cursor: "pointer",
                "&:hover": { color: theme.palette.contrast },
              }}
            >
              {el.prod_name}
            </Typography>
          </Box>
          <Divider
            variant="middle"
            sx={{ marginRight: "0", marginLeft: "0" }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ marginTop: "1rem" }}
          >
            <Typography variant="subtitle2" color="text.primary">
              Price:
            </Typography>
            <Typography variant="subtitle2" color="text.primary">
              ${el.price}
            </Typography>
          </Stack>
        </Box>
      </CustomProductCard>
    </>
  );
};

export default ProductCard;
