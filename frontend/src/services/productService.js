import API from "data/api";
import { apiRequest } from "lib/axios";

/**
 * GET: Fetching the product list
 * @param {*} params
 * @returns the new product list
 */
export const getProductList = async () => {
  try {
    let res = await apiRequest({
      url: API.getProdList.url,
      method: API.getProdList.method,
      params: {},
    });
    return res.data.list;
  } catch (error) {
    console.log(error);
  }
};

/**
 * GET: Fetching single product's detail info
 * @param {number} prodId - the target prodId to get detail
 * @returns the product's detail info
 */
export const getProductDetail = async (prodId) => {
  try {
    let res = await apiRequest({
      url: `${API.getProdDetail.url}/${prodId}`,
      method: API.getProdDetail.method,
      params: {},
    });
    return res.data.detail;
  } catch (error) {
    console.log(error);
  }
};
