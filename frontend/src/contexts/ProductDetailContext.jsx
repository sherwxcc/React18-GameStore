import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductDetail } from "services/productService";

const ProductDetailContext = createContext();

export function ProductDetailProvider({ children }) {
  let { prodId } = useParams();
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    getProductDetail(prodId).then((res) => {
      setProductDetail(res);
    });
  }, [prodId]);

  return (
    <ProductDetailContext.Provider value={{ productDetail }}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export default ProductDetailContext;
