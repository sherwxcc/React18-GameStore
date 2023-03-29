import API from "data/api";
import { apiRequest } from "lib/axios";

export const login = async (data) => {
  try {
    let res = await apiRequest({
      url: API.logIn.url,
      method: API.logIn.method,
      params: {},
      data,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data) => {
  try {
    let res = await apiRequest({
      url: API.register.url,
      method: API.register.method,
      params: {},
      data,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
