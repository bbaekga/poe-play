import { b as boot } from "./index.js";
import { a as axios$1 } from "./axios2.js";
const api = axios$1.create({ baseURL: "https://api.example.com" });
var axios = boot(({ app }) => {
  app.config.globalProperties.$axios = axios$1;
  app.config.globalProperties.$api = api;
});
export { api, axios as default };
