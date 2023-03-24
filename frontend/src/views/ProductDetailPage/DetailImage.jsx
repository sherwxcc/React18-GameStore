import { useContext } from "react";
// Contexts
import ProductDetailContext from "contexts/ProductDetailContext";

const DetailImage = () => {
  const { productDetail } = useContext(ProductDetailContext);

  return (
    <>
      <div>Image Here</div>
      <div>{productDetail.img_url}</div>
    </>
  );
};

export default DetailImage;
