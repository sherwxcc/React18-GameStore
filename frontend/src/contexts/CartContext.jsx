import { createContext, useEffect, useMemo, useState } from "react";
import { getLocalUserId } from "utils/localStorage";
import {
  getCartList,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCartAll,
} from "services/cartService";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (getLocalUserId()) {
      getCartList(getLocalUserId()).then((list) => {
        setCart(list);
      });
    } else {
      setCart([]);
    }
  }, []);

  const cartLength = useMemo(() => {
    return cart?.length.toString();
  }, [cart]);

  const cartTotalPrice = useMemo(() => {
    return cart?.map((el) => el.price).reduce((accu, curr) => accu + curr, 0);
  }, [cart]);

  const handleGetCart = async (userId) => {
    getCartList(userId).then((list) => {
      setCart(list);
    });
  };

  const handleAddCart = async (prodId) => {
    let userId = getLocalUserId();
    let list = await addCartItem(userId, prodId);
    setCart(list);
  };

  /**
   * Update cart handler
   * @param {number} prodId
   * @param {number} quantity
   */
  const handleUpdateCart = async (prodId, quantity) => {
    let userId = getLocalUserId();
    let list = await updateCartItem(userId, prodId, quantity);
    setCart(list);
  };

  const handleDeleteCart = async (prodId) => {
    let userId = getLocalUserId();
    let list = await deleteCartItem(userId, prodId);
    setCart(list);
  };

  const handleDeleteCartAll = async () => {
    let userId = getLocalUserId();
    let list = await deleteCartAll(userId);
    setCart(list);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartLength,
        cartTotalPrice,
        handleAddCart,
        handleClearCart,
        handleDeleteCart,
        handleDeleteCartAll,
        handleGetCart,
        handleUpdateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
