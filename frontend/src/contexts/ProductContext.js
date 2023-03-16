import { createContext, useState } from "react";

const ProductContext = createContext();

export function MessageProvider({ children }) {
  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
