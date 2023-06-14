const express = require("express");

class CartRouter {
  constructor(cartService) {
    this.cartService = cartService;
  }

  router() {
    let router = express.Router();
    router.get("/all/:userId", this.getCartAll.bind(this));
    router.post("/add", this.postSingleItem.bind(this));
    router.put("/update", this.putSingleItem.bind(this));
    router.post("/del", this.deleteCartItem.bind(this));
    router.delete("/del/all/:userId", this.deleteCartAll.bind(this));
    return router;
  }

  async getCartAll(req, res, next) {
    try {
      let result = await this.cartService.selectCartAll(req.params.userId);

      return res.status(200).json(result);
    } catch (error) {
      next(error);
      throw new Error(error);
    }
  }

  async postSingleItem(req, res, next) {
    try {
      let cartProdQty = await this.cartService.checkCartItem(
        req.body.userId,
        req.body.prodId
      );
      if (cartProdQty) {
        cartProdQty++;
        await this.cartService.updateCartItem(
          req.body.userId,
          req.body.prodId,
          cartProdQty
        );
      } else {
        await this.cartService.insertCartItem(req.body.userId, req.body.prodId);
      }
      let result = await this.cartService.selectCartAll(req.body.userId);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
      throw new Error(error);
    }
  }

  async putSingleItem(req, res, next) {
    try {
      await this.cartService.updateCartItem(
        req.body.userId,
        req.body.prodId,
        req.body.quantity
      );
      let result = await this.cartService.selectCartAll(req.body.userId);

      return res.status(200).json(result);
    } catch (error) {
      next(error);
      throw new Error(error);
    }
  }

  async deleteCartItem(req, res, next) {
    try {
      await this.cartService.deleteCartItem(req.body.userId, req.body.prodId);
      let result = await this.cartService.selectCartAll(req.body.userId);
      return res.status(200).json(result);
    } catch (error) {
      next(error);
      throw new Error(error);
    }
  }

  async deleteCartAll(req, res, next) {
    try {
      await this.cartService.deleteCartAll(req.params.userId);
      let result = await this.cartService.selectCartAll(req.params.userId);

      return res.status(200).json(result);
    } catch (error) {
      next(error);
      throw new Error(error);
    }
  }
}

module.exports = CartRouter;
