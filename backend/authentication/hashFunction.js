const bcrypt = require("bcrypt");

const hashPassword = async (plainText) => {
  try {
    let salt = await bcrypt.genSalt();
    let hash = await bcrypt.hash(plainText, salt);
    console.log(`Hashed password: ${hash}`);
    return hash;
  } catch (err) {
    throw new Error(err);
  }
};

const checkPassword = async (plainText, hashedPassword) => {
  try {
    let matchResult = await bcrypt.compare(plainText, hashedPassword);
    return matchResult;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  hashPassword: hashPassword,
  checkPassowrd: checkPassword,
};
