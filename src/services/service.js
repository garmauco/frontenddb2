import http from "./http-common";

const getAll = () => {
  return http.get("/departaments");
}

export default {getAll}