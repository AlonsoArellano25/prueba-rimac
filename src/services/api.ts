import axios from "axios";

const API = axios.create({
  baseURL: "https://rimac-front-end-challenge.netlify.app/api"
});

export default API;
