const express = require("express");

class AuthRouter {
  constructor(authService) {
    this.authService = authService;
  }

  router() {
    let router = express.Router();
    router.get("/hi", this.test.bind(this));
    router.post("/signin", this.postLogin.bind(this));
    router.post("/signup", this.postSignup.bind(this));
    router.post("/change-password", this.postNewPassword.bind(this));
    return router;
  }

  test(req, res, next) {
    res.json({ hi: "hello" });
  }

  async postLogin(req, res, next) {
    try {
      if (req.body.username && req.body.password) {
        await this.authService
          .login(req.body.username, req.body.password)
          .then((result) => {
            if (result.token)
              return res
                .status(200)
                .json({ message: "Welcome", token: res.token });
            return res.json(result);
          });
      }
    } catch (err) {
      next(err);
      throw new Error(err);
    }
  }

  async postSignup(req, res, next) {
    try {
      if (
        req.body.username &&
        req.body.password &&
        req.body.firstname &&
        req.body.lastname
      ) {
        await this.authService
          .checkExist(req.body.username)
          .then((isRepeated) => {
            if (isRepeated)
              return res.status(200).json({ message: "User already exist" });
          });

        await this.authService
          .signup({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            admin: false,
          })
          .then((newUserId) => {
            return res
              .status(200)
              .json({ message: "Created new user", ...newUserId });
          });
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
}

module.exports = AuthRouter;
