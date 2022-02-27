import axios from "axios";

export const apiCadDoBem = axios.create({
  baseURL: "https://cadastro-do-bem-api.herokuapp.com",
});
