import axios from "axios";

const port = 30000;
const baseURL = `http://a7eab011cae114711ada76d353f964c3-1474535787.us-west-2.elb.amazonaws.com`;
// const baseURL = `${window.location.protocol}//${window.location.hostname}:${port}`;

const myAxios = axios.create({
  baseURL,
});

export default myAxios;
