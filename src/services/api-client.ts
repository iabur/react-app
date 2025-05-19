import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { AxiosError } from "axios";