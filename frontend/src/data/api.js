const API = {
  test: { url: "/user/hi", method: "GET" },
  // Auth Routes
  logIn: { url: "/user/login", method: "POST" },
  register: { url: "/user/register", method: "POST" },
  changePassword: { url: "/user/change-password", method: "POST" },
  // Cart Routes
  getCartList: { url: "/cart/all", method: "GET" },
  addCartItem: { url: "/cart/add", method: "POST" },
  updateCartItem: { url: "/cart/update", method: "PUT" },
  deleteCartItem: { url: "/cart/del", method: "DELETE" },
  clearCart: { url: "/cart/del/all", method: "DELETE" },
  // Order Routes
  // Product Routes
  getProdList: { url: "/product/list", method: "GET" },
  getProdDetail: { url: "/product/detail", method: "GET" },
};

export default API;
