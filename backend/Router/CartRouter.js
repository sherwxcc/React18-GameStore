const express = require("express");

class CartRouter {
  constructor(cartService) {
    this.cartService = cartService;
  }

  router() {
    let router = express.Router();
    return router;
  }
}

module.exports = CartRouter;
