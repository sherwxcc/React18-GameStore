const hashFunction = require("../authentication/hashFunction");
const jwt = require("jsonwebtoken");
const config = require("../authentication/jwtConfig");

class AuthService {
  constructor(knex) {
    this.knex = knex;
  }

  async checkExist(username) {
    let matchedUser = await this.knex("tblUsers")
      .where("username", username)
      .limit(1);

    console.log("Matched: ", matchedUser);

    if (matchedUser.length) {
      return true;
    } else {
      return false;
    }
  }

  async login(username, password) {
    // Checking for matched username
    let matchedUser = await this.knex("tblUsers")
      .select("user_id", "username", "password")
      .where("username", username);

    if (matchedUser[0]) {
      // Checking for matched password
      let queryRes = await hashFunction.checkPassowrd(
        password,
        matchedUser[0].password
      );
      if (queryRes) {
        let payload = {
          id: matchedUser[0].user_id,
          username: matchedUser[0].username,
        };
        let token = jwt.sign(payload, config.jwtSecret);
        return { code: 20000, token, username }; // Login success
      } else {
        return { code: 10001 }; // Incorrect password
      }
    } else {
      return { code: 10002 }; // User not found
    }
  }

  async register(newUser) {
    let hashedPassword = await hashFunction.hashPassword(newUser.password);
    let user = await this.knex("tblUsers")
      .insert({ ...newUser, password: hashedPassword })
      .returning(["user_id", "username"]);
    return { code: 20000, user };
  }
}

module.exports = AuthService;
