import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  getCartList,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCartAll,
} from "services/cartService";
// Contexts
import MessageContext from "./MessageContext";
// Constants
import MESSAGE_CODE from "data/messageCode";
// Utils
import { getLocalUserId } from "utils/localStorage";

const CartContext = createContext();

export function CartProvider({ children }) {
  const { messageHandler } = useContext(MessageContext);

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
    return cart?.length.toString(); // Datatype number will cause display problem
  }, [cart]);

  const cartTotalPrice = useMemo(() => {
    return cart
      ?.map((el) => el.price * el.quantity)
      .reduce((accu, curr) => accu + curr, 0);
  }, [cart]);

  /**
   * Get full cart item list
   * @param {number} userId
   */
  const handleGetCart = async (userId) => {
    getCartList(userId).then((list) => {
      console.log("CART: ", list);
      setCart(list);
    });
  };

  /**
   * Add item to cart
   * @param {number} prodId
   */
  const handleAddCart = async (prodId) => {
    try {
      let userId = getLocalUserId();
      let list = await addCartItem(userId, prodId);
      setCart(list);
      messageHandler(MESSAGE_CODE[20003].type, MESSAGE_CODE[20003].message);
    } catch (err) {
      messageHandler(MESSAGE_CODE[10000].type, MESSAGE_CODE[10000].message);
    }
  };

  /**
   * Update quantity of a cart item
   * @param {number} prodId
   * @param {number} quantity
   */
  const handleUpdateCart = async (prodId, quantity) => {
    try {
      let userId = getLocalUserId();
      let list = await updateCartItem(userId, prodId, quantity);
      setCart(list);
      messageHandler(MESSAGE_CODE[20004].type, MESSAGE_CODE[20004].message);
    } catch (err) {
      messageHandler(MESSAGE_CODE[10000].type, MESSAGE_CODE[10000].message);
    }
  };

  /**
   * Delete single cart item
   * @param {number} prodId
   */
  const handleDeleteCart = async (prodId) => {
    try {
      let userId = getLocalUserId();
      let list = await deleteCartItem(userId, prodId);
      setCart(list);
      messageHandler(MESSAGE_CODE[20004].type, MESSAGE_CODE[20004].message);
    } catch (err) {
      messageHandler(MESSAGE_CODE[10000].type, MESSAGE_CODE[10000].message);
    }
  };

  /**
   * Delete all cart item
   */
  const handleDeleteCartAll = async () => {
    try {
      let userId = getLocalUserId();
      let list = await deleteCartAll(userId);
      setCart(list);
      messageHandler(MESSAGE_CODE[20004].type, MESSAGE_CODE[20004].message);
    } catch (err) {
      messageHandler(MESSAGE_CODE[10000].type, MESSAGE_CODE[10000].message);
    }
  };

  /**
   * Clear frontend cart items (For logout)
   */
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
