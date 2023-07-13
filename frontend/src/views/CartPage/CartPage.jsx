import { useContext } from "react";
import { useTranslation } from "react-i18next";
// Contexts
import { CartContext, OrderContext } from "contexts/index";
// Components
import CartList from "./CartList";
import { CustomButton } from "components/customUI/index";
// MUI
import { Box, Typography } from "@mui/material/index";
// Utils
import { formatPrice } from "utils/format";

function CartPage() {
  const { t } = useTranslation();
  const { cart, cartTotalPrice, handleDeleteCartAll } = useContext(CartContext);
  const { handleAddOrder } = useContext(OrderContext);

  return (
    <div className="view">
      <CartList />
      {cart?.length ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              padding: "2rem 1rem",
            }}
          >
            <Typography variant="subtitle2">{t("total")} : </Typography>
            <Typography
              variant="subtitle2"
              sx={{ marginLeft: "2rem" }}
            >{`HKD ${formatPrice(cartTotalPrice)}`}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Box sx={{ maxWidth: "max-content" }}>
              <CustomButton onClick={() => handleDeleteCartAll()}>
                {t("clearCart")}
              </CustomButton>
            </Box>
            <Box sx={{ maxWidth: "max-content", marginLeft: "1rem" }}>
              <CustomButton onClick={() => handleAddOrder()}>
                {t("checkout")}
              </CustomButton>
            </Box>
          </Box>
        </>
      ) : null}
    </div>
  );
}

export default CartPage;
