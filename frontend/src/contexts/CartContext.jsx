import { createContext, useState } from "react";
import {
  getCartList,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  clearCart,
} from "services/cartService";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const handleAddCart = (prodId) => {
    addCartItem()
  }

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
