import { useContext } from "react";
// Contexts
import { CartContext } from "contexts/index";
// MUI
import { Box, Card, Typography } from "@mui/material/index";

function CartList() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Typography variant="subtitle1">My Cart</Typography>
      {cart.map((el) => (
        <Card key={el.prod_id}>
          <Typography variant="body1">{el.prod_name}</Typography>
          <Typography variant="body1">{el.quantity}</Typography>
          <Typography variant="body1">{el.price}</Typography>
        </Card>
      ))}
    </>
  );
}

export default CartList;
