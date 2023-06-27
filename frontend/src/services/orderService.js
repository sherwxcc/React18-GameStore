import API from "data/api";
import { apiRequest } from "lib/axios";

export const getOrderList = async (userId, pageOffset) => {
  try {
    let res = await apiRequest({
      url: `${API.getOrderList.url}/${userId}/${pageOffset}`,
      method: API.getOrderList.method,
    });
    return { list: res.data.orderList, count: res.data.orderCount };
  } catch (error) {
    console.log(error);
  }
};

/**
 * POST Req: Inserting new order and clear shopping cart
 * @param {number} userId
 * @param {object} orderList
 * @returns the user's order list (offset 0)
 */
export const addOrder = async (userId, orderList) => {
  try {
    let res = await apiRequest({
      url: API.postOrder.url,
      method: API.postOrder.method,
      params: {},
      data: { userId, orderList },
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
  }
};
