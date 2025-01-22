import http from "./http";

export const login = (email, password) => {
  const path = "/user/login/";
  return http.post(path, { email, password });
};

export const resetPassword = (oldpwd, pwd1, pwd2) => {
  const path = "/user/resetpwd/";
  return http.post(path, { oldpwd, pwd1, pwd2 });
};
