/**
 * Notice level:
 * 0: none
 * 1: inline
 * 2: toast
 */

const MESSAGE_CODE = {
  // Error codes
  10000: { type: "error", message: "Action failed", noticeLv: 0 },
  10001: {
    type: "error",
    message: "Please check your password and username and try again",
    noticeLv: 1,
  }, // Wrong password
  10002: {
    type: "error",
    message: "Please check your password and username and try again",
    noticeLv: 1,
  }, // User not found
  10003: { type: "error", message: "Username already taken", noticeLv: 1 },
  // Success codes
  20000: { type: "success", message: "Login success", noticeLv: 0 },
  20001: { type: "success", message: "Account created", noticeLv: 0 },
};

export default MESSAGE_CODE;
