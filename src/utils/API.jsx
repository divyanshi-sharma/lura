import axios from "axios";

export default axios.create({
  baseURL: "https://lura-services.herokuapp.com/",
  responseType: "json"
});