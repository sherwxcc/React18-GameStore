import API from "data/api";
import { apiRequest } from "lib/axios";

/**
 * GET Req: Fetching cart list
 * @param {number} userId - the cart's userId
 * @returns the user's shopping cart
 */
export const getCartList = async (userId) => {
  try {
    let res = await apiRequest({
      url: `${API.getCartList.url}/${userId}`,
      method: API.getCartList.method,
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
  }
};

/**
 * POST Req: Inserting a new item to cart
 * @param {number} userId - the cart's userId
 * @param {number} prodId - the new cart item to be added
 * @returns the user's updated shopping cart
 */
export const addCartItem = async (userId, prodId) => {
  try {
    let res = await apiRequest({
      url: API.addCartItem.url,
      method: API.addCartItem.method,
      params: {},
      data: { userId, prodId },
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
  }
};

/**
 * PUT Req: Updating an item in cart
 * @param {number} userId - the cart's userId
 * @param {number} prodId - the cart item that needs to be updated
 * @param {number} quantity - the item's new quantity
 * @returns the user's updated shopping cart
 */
export const updateCartItem = async (userId, prodId, quantity) => {
  try {
    let res = await apiRequest({
      url: API.updateCartItem.url,
      method: API.updateCartItem.method,
      params: {},
      data: { userId, prodId, quantity },
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
  }
};

/**
 * DELETE Req: Deleting an item from cart
 * @param {number} userId - the cart's userId
 * @param {number} prodId - the cart item that's going to be deleted
 * @returns the user's updated shopping cart
 */
export const deleteCartItem = async (userId, prodId) => {
  try {
    let res = await apiRequest({
      url: API.deleteCartItem.url,
      method: API.deleteCartItem.method,
      params: { userId, prodId },
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
  }
};

/**
 * DELETE Req: Deleting all item from cart
 * @param {number} userId - the cart's userId
 * @returns the empty cart
 */
export const deleteCartAll = async (userId) => {
  try {
    let res = await apiRequest({
      url: API.clearCart.url,
      method: API.clearCart.method,
      params: { userId },
      data: {},
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
  }
};
