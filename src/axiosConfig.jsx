import axios from "axios";

const port = 30000;
const baseURL = `${window.location.protocol}//${window.location.hostname}:${port}`;

const myAxios = axios.create({
  baseURL,
});

export default myAxios;
