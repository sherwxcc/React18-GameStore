const express = require("express");

class ProductRouter {
  constructor(productService) {
    this.productService = productService;
  }

  router() {
    let router = express.Router();
    router.get("/list", this.getProductList.bind(this));
    router.get("/detail/:prodId", this.getProductDetail.bind(this));
    return router;
  }

  async getProductDetail(req, res, next) {
    try {
      let result = await this.productService.getProductDetail(
        req.params.prodId
      );
      return res.status(200).json(result);
    } catch (err) {
      next(err);
      throw new Error(err);
    }
  }

  async getProductList(req, res, next) {
    try {
      let result = await this.productService.getProductList();

      return res.status(200).json(result);
    } catch (err) {
      next(err);
      throw new Error(err);
    }
  }
}

module.exports = ProductRouter;
