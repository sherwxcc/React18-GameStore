// Require passport & JWT
const passport = require("passport");
const passportJWT = require("passport-jwt");
const config = require("./jwtConfig");
const ExtractJwt = passportJWT.ExtractJwt;

// Setup login strategy
module.exports = (knex) => {
  const strategy = new passportJWT.Strategy(
    {
      secretOrKey: config.jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    },
    async (payload, done) => {
      let matchedUser = await knex("tblUsers").where({
        user_id: payload.userId,
      });

      if (matchedUser.length) {
        return done(null, { userId: matchedUser[0].user_id });
      } else {
        return done(new Error("User not found"), null);
      }
    }
  );

  passport.use(strategy);

  return {
    initialize: function () {
      return passport.initialize();
    },

    authenticate: function () {
      return passport.authenticate("jwt", config.jwtSession);
    },
  };
};
