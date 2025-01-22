import http from "./http";

export const getads = () => {
  const path = "/ads/";

  return http.get(path);
};
