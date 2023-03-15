const alphanumRe = /^[A-Za-z0-9_]{2,20}$/;
const nameRe = /^[A-Za-z-\s]{2,20}$/;
const passwordRe = /^[A-Za-z0-9]{3,20}$/;

export function checkAlphanum(str) {
  console.log("ALPHANUM: ", alphanumRe.test(str));
  return alphanumRe.test(str);
}

export function checkName(str) {
  console.log("NAME CHECK: ", nameRe.test(str));
  return nameRe.test(str);
}

export function checkPassword(str) {
  console.log("PASSWORD: ", passwordRe.test(str));
  return passwordRe.test(str);
}
