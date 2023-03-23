import { useContext } from "react";
import ProductContext from "contexts/ProductContext";
import { Box, Grid } from "@mui/material/index";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { productList } = useContext(ProductContext);

  return (
    <>
      <Box sx={{ floxGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          columns={12}
          spacing={{ xs: 2, md: 3 }}
          sx={{ width: "auto", margin: "auto", padding: "2rem" }}
        >
          {productList?.map((el, i) => (
            <Grid item xs={6} sm={4} md={3} lg={3} xl={2} key={el.prod_id}>
              <ProductCard el={el} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProductList;
