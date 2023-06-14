import { useContext } from "react";
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

function CartList() {
  const { cart, cartTotalPrice, handleUpdateCart, handleDeleteCart } =
    useContext(CartContext);

  return (
    <>
      <Typography variant="h4">My Cart</Typography>
      {cart.length ? (
        cart.map((el, i) => (
          <CustomCartCard key={el.prod_id}>
            <Box sx={{ padding: "6px 8px", width: "5%" }}>
              <Typography variant="body1">{i + 1}</Typography>
            </Box>
            <CardMedia
              component="img"
              image={require(`assets/images/products/${el.img_url}.png`)}
              alt={el.prod_name}
              sx={{
                maxWidth: "10%",
                marginRight: "10%",
                borderRadius: "10px",
              }}
            />
            <Box sx={{ width: "30%", marginRight: "1rem" }}>
              <Typography variant="body1">{el.prod_name}</Typography>
            </Box>
            <Box sx={{ width: "20%", marginRight: "1rem", display: "flex" }}>
              <Button>
                <Typography
                  variant="body1"
                  onClick={() => {
                    el.quantity++;
                    handleUpdateCart(el.prod_id, el.quantity);
                  }}
                >
                  +
                </Typography>
              </Button>
              <Box sx={{ padding: "6px 8px" }}>
                <Typography variant="body1">{el.quantity}</Typography>
              </Box>
              <Button>
                <Typography
                  variant="body1"
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
            <Box sx={{ padding: "6px 8px", width: "15%" }}>
              <Typography variant="body1">$ {el.price}</Typography>
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
          <Typography variant="body1">Your cart is empty</Typography>
          <Box
            component="img"
            sx={{ width: "200px", marginTop: "2rem" }}
            src={Empty}
          />
        </Box>
      )}

      {cart.length && (
        <>
          <Box
            sx={{ display: "flex", justifyContent: "end", padding: "2.5rem" }}
          >
            <Typography variant="body1">Total</Typography>
            <Typography
              variant="body1"
              sx={{ marginLeft: "2rem", marginRight: "13%" }}
            >{`$ ${cartTotalPrice}`}</Typography>
          </Box>
        </>
      )}
    </>
  );
}

export default CartList;
