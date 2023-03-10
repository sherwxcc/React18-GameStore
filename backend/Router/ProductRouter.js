const express = require("express");

class ProductRouter {
  constructor(productService) {
    this.productService = productService;
  }

  router() {
    let router = express.Router();
    return router;
  }
}

module.exports = ProductRouter;
