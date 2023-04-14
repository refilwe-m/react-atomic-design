import axios from "axios";
import { TokenActions } from "./sub-services/user-service";

export const openAPI = axios.create({
  baseURL: "https://gradserver.onrender.com",
});

export const closedAPI = axios.create({
  baseURL: "https://gradserver.onrender.com",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
});
