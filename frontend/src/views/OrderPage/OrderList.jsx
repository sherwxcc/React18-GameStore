import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Contexts
import ColorContext from "contexts/ColorContext";
import OrderContext from "contexts/OrderContext";
// Components
import {
  CustomPagination,
  CustomTableHead,
  CustomTableRecord,
  CustomTableValue,
} from "components/customUI/index";
// MUI
import { Box, Pagination, Typography } from "@mui/material/index";

function OrderList() {
  const { t } = useTranslation();
  const { theme } = useContext(ColorContext);
  const { order, orderCount, handlePageOffset } = useContext(OrderContext);

  useEffect(() => {
    return () => {
      handlePageOffset(1); // Reset page offset when leave page
    };
  }, []);

  return (
    <>
      <CustomTableHead theme={theme}>
        <CustomTableValue sx={{ width: "10%" }}>
          <Typography variant="subtitle1">{t("orderNum")}</Typography>
        </CustomTableValue>
        <CustomTableValue sx={{ width: "25%" }}>
          <Typography variant="subtitle1">{t("orderDate")}</Typography>
        </CustomTableValue>
        <CustomTableValue sx={{ width: "35%" }}>
          <Typography variant="subtitle1">{t("productName")}</Typography>
        </CustomTableValue>
        <CustomTableValue sx={{ width: "15%", textAlign: "right" }}>
          <Typography variant="subtitle1">{t("brand")}</Typography>
        </CustomTableValue>
        <CustomTableValue sx={{ width: "15%", textAlign: "right" }}>
          <Typography variant="subtitle1">{t("quantity")}</Typography>
        </CustomTableValue>
        {/* <CustomTableValue sx={{ width: "10%", textAlign: "right" }}>
          <Typography variant="subtitle1">{t("status")}</Typography>
        </CustomTableValue> */}
      </CustomTableHead>
      <Box sx={{ minHeight: "350px" }}>
        {order?.map((el, i) => (
          <Link to={`/product/detail/${el.prod_id}`} key={i}>
            <CustomTableRecord theme={theme}>
              <CustomTableValue sx={{ width: "10%" }}>
                <Typography variant="subtitle1">{el.ord_id}</Typography>
              </CustomTableValue>
              <CustomTableValue sx={{ width: "25%" }}>
                <Typography variant="subtitle1">
                  {el.order_date.substring(0, 19).replace("T", " ")}
                </Typography>
              </CustomTableValue>
              <CustomTableValue sx={{ width: "35%" }}>
                <Typography variant="subtitle1">{el.prod_name}</Typography>
              </CustomTableValue>
              <CustomTableValue sx={{ width: "15%", textAlign: "right" }}>
                <Typography variant="subtitle1">
                  {t(`${el.brand_name}`)}
                </Typography>
              </CustomTableValue>
              <CustomTableValue sx={{ width: "15%", textAlign: "right" }}>
                <Typography variant="subtitle1">{el.quantity}</Typography>
              </CustomTableValue>
              {/* <CustomTableValue sx={{ width: "10%", textAlign: "right" }}>
                <Typography variant="subtitle1">
                  {t(`${el.status_name}`)}
                </Typography>
              </CustomTableValue> */}
            </CustomTableRecord>
          </Link>
        ))}
      </Box>
      {order ? (
        <Box mt={5} mx={"auto"} sx={{ width: "max-content" }}>
          <CustomPagination
            shape="rounded"
            theme={theme}
            defaultPage={1}
            count={orderCount}
            onChange={(e, page) => {
              handlePageOffset(page);
            }}
          />
        </Box>
      ) : null}
    </>
  );
}

export default OrderList;
