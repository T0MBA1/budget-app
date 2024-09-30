import { useAuthStore } from "@/stores";
import NProgress from "nprogress/nprogress.js";

export const instance = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};
NProgress.configure({ showSpinner: true });
const ignored_code = [401, 422];

// helper functions
function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const { token } = useAuthStore();
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);

  console.log("tokenda", isLoggedIn, isApiUrl);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

function request(method) {
  return (endpoint, body) => {
    NProgress.start();
    const url = import.meta.env.VITE_API_URL + endpoint;
    const requestOptions = {
      method,
      headers: authHeader(url),
    };
    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    const response = fetchInstance(url, requestOptions, 2);
    return response;
  };
}

async function fetchInstance(url, options = {}, retries) {
  const callback = await fetch(url, options);
  const response = callback.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!callback.ok) {
      const error = data || data.data;
      if (ignored_code.includes(callback.status)) {
        if (retries > 0 && callback.status === 401) {
          return fetchInstance(url, options, retries - 1);
        }
        // console.log("fetcErr", error);
        // return Promise.reject(error);
        // //TO DO
      }

      return Promise.reject(error);
    }

    return data;
  });

  NProgress.done();
  return response;
}
