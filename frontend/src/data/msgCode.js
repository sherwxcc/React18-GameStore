/**
 * Notice level:
 * 0: none
 * 1: inline
 * 2: toast
 */

const MSG_CODE = {
  // Error codes
  10000: { type: "error", message: "Action failed", noticeLv: 0 },
  10001: { type: "error", message: "Incorrect password", noticeLv: 1 },
  10002: { type: "error", message: "User not found", noticeLv: 1 },
  10003: { type: "error", message: "User already exist", noticeLv: 1 },
  // Success codes
  20000: { type: "success", message: "Action success", noticeLv: 0 },
};
