import { createContext, useEffect, useState } from "react";
import { getProductList } from "services/productService";

const ProductListContext = createContext();

export function ProductListProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [params, setParams] = useState({});

  useEffect(() => {
    getProductList(params).then((res) => {
      setProductList(res);
    });
  }, [params]);

  return (
    <ProductListContext.Provider value={{ productList, params, setParams }}>
      {children}
    </ProductListContext.Provider>
  );
}

export default ProductListContext;
