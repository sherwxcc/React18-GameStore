import { useTranslation } from "react-i18next";
// Components
import OrderList from "./OrderList";
// MUI
import { Typography } from "@mui/material/index";

function OrderPage() {
  const { t } = useTranslation();

  return (
    <div className="view">
      <Typography variant="h4">{t("myOrders")}</Typography>
      <OrderList />
    </div>
  );
}

export default OrderPage;
