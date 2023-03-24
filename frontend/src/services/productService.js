import API from "data/api";
import { apiRequest } from "lib/axios";

// Fetching the product list
export const getProductList = async (params) => {
  let res = await apiRequest({
    url: API.getProdList.url,
    method: API.getProdList.method,
    params,
    data: {},
    token: null,
  });
  return res.data.list;
};

export const getProductDetail = async (prodId) => {
  let res = await apiRequest({
    url: `${API.getProdDetail.url}/${prodId}`,
    method: API.getProdDetail.method,
    params: {},
    data: {},
    token: null,
  });

  return res.data.detail;
};
