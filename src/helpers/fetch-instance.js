import { useAuthStore } from "@/stores";
import NProgress from "nprogress/nprogress.js";

export const instance = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};
NProgress.configure({ showSpinner: true });

function request(method) {
  return async (endpoint, body) => {
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
    const response = await fetch(url, requestOptions);
    return handleResponse(response);
  };
}

// helper functions
function authHeader(url) {
  // return auth header with jwt if user is logged in and request is to the api url
  const { user } = useAuthStore();
  const isLoggedIn = !!user?.token;
  const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      // const { user, logout } = useAuthStore();
      // Object.prototype.hasOwnProperty.call(response, "retryAttempts")
      const config = 1;
      return response(config);
      // return Promise.reject(config);
      // if (response.status === 401 && user) {
      //   response.retryAttempts = 1;
      //   console.log(response);
      //   // if (data.message === 'TOKEN_EXPIRED' && user.refresh_token) {

      //   // }
      //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      //   logout();
      // }
      // const error = (data && data.data) || { apiMessage: data.message };
      // NProgress.done();
      // return Promise.reject(error);
    }

    NProgress.done();
    return data;
  });
}
