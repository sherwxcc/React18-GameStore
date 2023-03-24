import { useContext } from "react";
// Contexts
import ProductDetailContext from "contexts/ProductDetailContext";

const DetailContent = () => {
  const { productDetail } = useContext(ProductDetailContext);

  return (
    <>
      <div>PROD ID: {productDetail.prod_id}</div>
      <div>PROD NAME: {productDetail.prod_name}</div>
      <div>PROD PRICE: {productDetail.price}</div>
      <div>PROD BRAND: {productDetail.brand_name}</div>
      <div>PROD CAT: {productDetail.cat_name}</div>
    </>
  );
};

export default DetailContent;
