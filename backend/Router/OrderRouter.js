const express = require("express");

class OrderRouter {
  constructor(orderService, cartService) {
    this.orderService = orderService;
    this.cartService = cartService;
  }

  router() {
    let router = express.Router();
    router.get("/all/:userId/:pageOffset", this.getOrderAll.bind(this));
    router.post("/add", this.postOrder.bind(this));
    return router;
  }

  async getOrderAll(req, res, next) {
    try {
      let orderList = await this.orderService.selectOrderAll(
        req.params.userId,
        req.params.pageOffset
      );

      let orderCount = await this.orderService.countOrder(req.params.userId);

      return res.status(200).json({ code: 30000, orderCount, orderList });
    } catch (error) {
      next(error);
      throw new Error(error);
    }
  }

  async postOrder(req, res, next) {
    try {
      let addResult = await this.orderService.addOrder(
        req.body.userId,
        req.body.orderList
      );
      if (addResult) {
        await this.cartService.deleteCartAll(req.body.userId); // Clear cart

        let newOrderList = await this.orderService.selectOrderAll(
          req.body.userId,
          0 // Page offset 0
        );

        return res.status(200).json({ code: 20005, list: newOrderList });
      }
    } catch (error) {
      next(error);
      throw new Error(error);
    }
  }
}

module.exports = OrderRouter;
