import { useContext } from "react";
import { Link } from "react-router-dom";
// Contexts
import { CartContext, ColorContext } from "contexts/index";
// MUI
import {
  Box,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material/index";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// Custom components
import { CustomProductCard } from "components/customUI/index";
// Utils
import { formatPrice } from "utils/format";

const ProductCard = ({ el }) => {
  const { theme } = useContext(ColorContext);
  const { handleAddCart } = useContext(CartContext);

  return (
    <>
      <CustomProductCard key={el.prod_id} theme={theme} className="card-base">
        <CardMedia
          component="img"
          image={`/static/images/products/${el.img_url}.png`}
          alt={el.prod_name}
          sx={{
            maxWidth: "100%",
            maxHeight: "150px",
            height: "100%",
            width: "100%",
            borderRadius: "2px",
            objectFit: "contain",
            background: "#fff",
          }}
        ></CardMedia>
        <Box sx={{ padding: "0 1rem 1rem 1rem" }}>
          <Stack direction="row" justifyContent="space-between">
            <Box sx={{ height: "3em" }}>
              <Link to={`/product/detail/${el.prod_id}`}>
                <Typography
                  variant="subtitle2"
                  color="text.primary"
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    maxWidth: "20ch",
                    lineHeight: "1rem",
                    cursor: "pointer",
                    overflow: "hidden",
                    "&:hover": { color: theme.palette.contrast },
                  }}
                >
                  {el.prod_name}
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{ display: "flex" }}
              onClick={() => handleAddCart(el.prod_id)}
            >
              <AddShoppingCartIcon
                sx={{
                  fontSize: "1.1em",
                  cursor: "pointer",
                  margin: "16px 0",
                  "&:hover": { color: theme.palette.contrast },
                }}
              />
            </Box>
          </Stack>
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
              {"HKD " + formatPrice(el.price)}
            </Typography>
          </Stack>
        </Box>
      </CustomProductCard>
    </>
  );
};

export default ProductCard;
