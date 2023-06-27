/**
 * Notice level:
 * 0: none
 * 1: inline
 * 2: toast
 */

const MESSAGE_CODE = {
  /**
   * Error Codes
   * 10000: Action failed
   * 10001: Wrong password
   * 10002: User not found
   * 10003: Username duplicated
   */
  10000: { type: "error", message: "actionFailed" },
  10001: { type: "error", message: "checkPassword" }, // Show same message for username & pw error
  10002: { type: "error", message: "checkPassword" }, // Show same message for username & pw error
  10003: { type: "error", message: "usernameTaken" },
  /**
   * Success Codes
   * 20000: Action success
   * 20001: Successfully log in
   * 20002: Added to shopping cart
   * 20003: Updated cart quantity
   * 20004: Submitted order
   */
  20000: { type: "success", message: "actionSuccess" },
  20001: { type: "success", message: "loginSuccess" },
  20002: { type: "success", message: "accountCreated" },
  20003: { type: "success", message: "addedToCart" },
  20004: { type: "success", message: "updatedCart" },
  20005: { type: "success", message: "placedOrder" },
};

export default MESSAGE_CODE;
