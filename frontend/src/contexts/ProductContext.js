import { createContext, useEffect, useMemo, useState } from "react";
import API from "data/api";
import { apiRequest } from "lib/axios";

const ProductContext = createContext();

/** Function to get product list */
const fetchList = async (params) => {
  let req = {
    url: API.getProductList.url,
    method: API.getProductList.method,
    params: params,
    data: {},
    token: null,
  };

  return await apiRequest(req);
};

export function ProductProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [params, setParams] = useState({});

  useEffect(() => {
    fetchList(params).then((res) => {
      console.log("RES: ", res);
      setProductList(res.data.list);
    });
  }, [params]);

  return (
    <ProductContext.Provider value={{ productList, params, setParams }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
