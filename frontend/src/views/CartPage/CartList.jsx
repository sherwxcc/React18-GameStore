import { useContext } from "react";
import { useTranslation } from "react-i18next";
// Contexts
import { CartContext } from "contexts/index";
// Components
import { CustomCartCard } from "components/customUI/index";
// MUI
import {
  Box,
  Button,
  CardMedia,
  SvgIcon,
  Typography,
} from "@mui/material/index";
import DeleteIcon from "@mui/icons-material/Delete";
// Images
import Empty from "assets/images/placeholders/emptyBox.png";
// Utils
import { formatPrice } from "utils/format";

function CartList() {
  const { t } = useTranslation();

  const { cart, cartTotalPrice, handleUpdateCart, handleDeleteCart } =
    useContext(CartContext);

  return (
    <>
      <Typography variant="h4">{t("myCart")}</Typography>
      {cart.length ? (
        cart.map((el, i) => (
          <CustomCartCard key={el.prod_id}>
            <Box sx={{ padding: "6px 8px", width: "5%" }}>
              <Typography variant="subtitle2">{i + 1}</Typography>
            </Box>
            <CardMedia
              component="img"
              image={require(`assets/images/products/${el.img_url}.png`)}
              alt={el.prod_name}
              sx={{
                maxWidth: "10%",
                marginRight: "5%",
                borderRadius: "10px",
              }}
            />
            <Box sx={{ width: "35%", marginRight: "1rem" }}>
              <Typography variant="subtitle2">{el.prod_name}</Typography>
            </Box>
            <Box sx={{ width: "15%", marginRight: "1rem", display: "flex" }}>
              <Button>
                <Typography
                  variant="subtitle2"
                  onClick={() => {
                    el.quantity++;
                    handleUpdateCart(el.prod_id, el.quantity);
                  }}
                >
                  +
                </Typography>
              </Button>
              <Box sx={{ padding: "6px 8px" }}>
                <Typography variant="subtitle2">{el.quantity}</Typography>
              </Box>
              <Button>
                <Typography
                  variant="subtitle2"
                  onClick={() => {
                    el.quantity--;
                    if (el.quantity >= 1) {
                      handleUpdateCart(el.prod_id, el.quantity);
                    } else {
                      handleDeleteCart(el.prod_id);
                    }
                  }}
                >
                  -
                </Typography>
              </Button>
            </Box>
            <Box sx={{ padding: "6px 8px", width: "15%", marginRight: "5%", textAlign: "right" }}>
              <Typography variant="subtitle2">
                HKD {formatPrice(el.price)}
              </Typography>
            </Box>
            <Box
              sx={{ padding: "6px 8px", display: "flex", alignItems: "center" }}
            >
              <SvgIcon
                color="svgPrimary"
                sx={{ cursor: "pointer" }}
                onClick={() => handleDeleteCart(el.prod_id)}
              >
                <DeleteIcon></DeleteIcon>
              </SvgIcon>
            </Box>
          </CustomCartCard>
        ))
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1">{t("cartIsEmpty")} &#127773;</Typography>
          <Box
            component="img"
            sx={{ width: "200px", marginTop: "2rem" }}
            src={Empty}
          />
        </Box>
      )}

      {cart.length ? (
        <>
          <Box
            sx={{ display: "flex", justifyContent: "end", padding: "2.5rem" }}
          >
            <Typography variant="subtitle2">{t("total")} : </Typography>
            <Typography
              variant="subtitle2"
              sx={{ marginLeft: "2rem" }}
            >{`HKD ${formatPrice(cartTotalPrice)}`}</Typography>
          </Box>
        </>
      ) : null}
    </>
  );
}

export default CartList;
