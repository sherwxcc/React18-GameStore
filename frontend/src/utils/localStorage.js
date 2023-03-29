export const getLocalUser = () => {
  return localStorage.getItem("gspUser")
    ? JSON.parse(localStorage.getItem("gspUser"))
    : null;
};

export const getLocalUserId = () => {
  return localStorage.getItem("gspUser")
    ? JSON.parse(localStorage.getItem("gspUser")).userId
    : null;
};

export const getLocalUsername = () => {
  return localStorage.getItem("gspUser")
    ? JSON.parse(localStorage.getItem("gspUser")).username
    : null;
};

export const getJWT = () => {
  return localStorage.getItem("gspUser")
    ? JSON.parse(localStorage.getItem("gspUser")).token
    : null;
};

export const clearLocalUser = () => {
  return localStorage.removeItem("gspUser");
};
