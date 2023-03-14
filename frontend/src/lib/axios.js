import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000, // 30000ms = 30s
});

export const apiRequest = async ({
  url,
  method,
  params = {},
  data = {},
  token = null,
}) => {
  try {
    console.table({ url, method, params, data, token });
    let res = await axiosInstance.request({ url, method, params, data });
    if (res.status === 200) {
      return res;
    }
  } catch (err) {
    throw err;
  }
};
