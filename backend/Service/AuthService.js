const hashFunction = require("../authentication/hashFunction");
const jwt = require("jsonwebtoken");
const config = require("../authentication/jwtConfig");

class AuthService {
  constructor(knex) {
    this.knex = knex;
  }

  async login(username, password) {
    let matchedUser = await this.knex("tblUsers")
      .select("user_id", "username", "password")
      .where("username", username);

    if (matchedUser[0]) {
      let result = await hashFunction.checkPassowrd(
        password,
        matchedUser[0].password
      );
      if (result) {
        let payload = {
          id: matchedUser[0].user_id,
          username: matchedUser[0].username,
        };
        let token = jwt.sign(payload, config.jwtSecret);
        return { token };
      } else {
        return { code: 10001, msg: "Incorrect password" };
      }
    } else {
      return { code: 10002, msg: "User not found" };
    }
  }

  async checkExist(username) {
    let matchedUser = await this.knex("tblUsers").where("username", username);
    console.log("Matched: ", matchedUser);
    if (matchedUser.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  async signup(newUser) {
    let hashedPassword = await hashFunction.hashPassword(newUser.password);
    let userId = await this.knex("tblUsers")
      .insert({ ...newUser, password: hashedPassword })
      .returning("user_id");
    return { userId };
  }
}

module.exports = AuthService;
