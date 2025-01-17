import http from "./http";

export const login = (email, password) => {
  const path = "/user/login/";
  return http.post(path, { email, password });
};
