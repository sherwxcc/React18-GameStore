const express = require("express");

class OrderRouter {
  constructor(orderService) {
    this.orderService = orderService;
  }

  router() {
    let router = express.Router();
    return router;
  }
}

module.exports = OrderRouter;
