import axios from "axios";
import storage from "../auth/storage";

// Step-1: Create a new Axios instance with a custom config.
const customAxios = axios.create({
  baseURL: `https://questkart.com/25offers/api/v1`,
  timeout: 10000,
});

// Step-2: Create request, response & error handlers
const requestHandler = (request) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  request.headers.Authorization = `Bearer ${storage.getToken()}`;

  return request;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);
