import { createContext, useContext, useEffect, useState } from "react";
import { getOrderList, addOrder } from "services/orderService";
// Contexts
import CartContext from "./CartContext";
import MessageContext from "./MessageContext";
// Constants
import MESSAGE_CODE from "data/messageCode";
// Utils
import { getLocalUserId } from "utils/localStorage";

const OrderContext = createContext();
const PAGE_SIZE = 6;

export function OrderProvider({ children }) {
  const { cart, handleGetCart } = useContext(CartContext);
  const { messageHandler } = useContext(MessageContext);
  const [order, setOrder] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [pageOffset, setPageOffset] = useState(0);

  useEffect(() => {
    if (getLocalUserId()) {
      getOrderList(getLocalUserId(), pageOffset).then((res) => {
        setOrder(res.list);
        setOrderCount(Math.ceil(res.count / PAGE_SIZE));
      });
    } else {
      setOrder([]);
    }
  }, [pageOffset]);

  const handleAddOrder = async () => {
    try {
      let userId = getLocalUserId();
      let orderList = cart.map((el) => {
        return { prodId: el.prod_id, quantity: el.quantity };
      });

      await addOrder(userId, orderList);
      let res = await getOrderList(userId, pageOffset);
      setOrder(res.list);
      setOrderCount(Math.ceil(res.count / PAGE_SIZE));
      handleGetCart(userId);
      messageHandler(MESSAGE_CODE[20005].type, MESSAGE_CODE[20005].message);
    } catch (error) {
      messageHandler(MESSAGE_CODE[10000].type, MESSAGE_CODE[10000].message);
    }
  };

  const handlePageOffset = (pageNum) => {
    setPageOffset(pageNum * PAGE_SIZE - PAGE_SIZE);
  };

  return (
    <OrderContext.Provider
      value={{ order, orderCount, handleAddOrder, handlePageOffset }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
