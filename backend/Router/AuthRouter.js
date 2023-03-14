const express = require("express");

class AuthRouter {
  constructor(authService) {
    this.authService = authService;
  }

  router() {
    let router = express.Router();
    router.get("/hi", this.test.bind(this));
    router.post("/login", this.postLogin.bind(this));
    router.post("/signup", this.postRegister.bind(this));
    router.post("/change-password", this.postNewPassword.bind(this));
    return router;
  }

  test(req, res, next) {
    res.json({ hi: "hello" });
  }

  // Uset login, url: /user/login
  async postLogin(req, res, next) {
    try {
      if (req.body.username && req.body.password) {
        let result = await this.authService.login(
          req.body.username,
          req.body.password
        );

        return res.status(200).json(result);
      }
    } catch (err) {
      next(err);
      throw new Error(err);
    }
  }

  async postNewPassword(req, res, next) {
    try {
      //
    } catch (error) {
      //
    }
  }

  // User register url: /user/signup
  async postRegister(req, res, next) {
    try {
      if (
        req.body.username &&
        req.body.password &&
        req.body.firstname &&
        req.body.lastname
      ) {
        let result = await this.authService.checkExist(req.body.username);

        if (result) {
          return res.status(200).json({ code: 10000 });
        }

        result = await this.authService.register({
          username: req.body.username,
          password: req.body.password,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          admin: false,
        });

        return res.status(200).json(result);
      }
    } catch (err) {
      next(err);
      throw new Error(err);
    }
  }
}

module.exports = AuthRouter;
