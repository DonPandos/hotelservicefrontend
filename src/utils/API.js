import axios from "axios";

export default axios.create({
  baseURL: "http://178.209.88.232:8080/api",
  responseType: "json"
});