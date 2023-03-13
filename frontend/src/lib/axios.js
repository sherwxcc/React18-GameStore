import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60,
});

export const apiRequest = async ({
  url,
  method,
  params = {},
  data = {},
  token = null,
}) => {
  console.table({ url, method, params, data, token });
  return await axiosInstance
    .request({ url, method, params, data })
    .then((res, rej) => {
      console.log("res", res);
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
};
