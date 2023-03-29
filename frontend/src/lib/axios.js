import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000, // 30000ms = 30s
  headers: {
    Authorization: `Bearer ${localStorage.getItem("gspUser") || null}`,
  },
});

/**
 * Sending API Request with config
 * @param {string} url - the API's url concat with params, BE retrieved by req.params.*
 * @param {string} method - the HTTP methods: GET / POST / PUT / DELETE
 * @param {object} params - the query params, BE retrieved by req.query.*
 * @param {object} data - the POST/PUT req body, BE retrieved by req.body.*
 * @returns API response object
 */
export const apiRequest = async ({ url, method, params = {}, data = {} }) => {
  try {
    console.table({ url, method, params, data });
    let res = await axiosInstance.request({ url, method, params, data });
    if (res.status === 200) {
      return res;
    }
  } catch (err) {
    throw err;
  }
};
