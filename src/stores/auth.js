import { defineStore } from "pinia";
import { instance } from "@/helpers";
import router from "@/router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    token: JSON.parse(localStorage.getItem("token")),
    returnUrl: null,
    menu: JSON.parse(localStorage.getItem("menu")),
  }),
  actions: {
    async me() {
      await instance.get("/me").then((response) => {
        const user = response.data.data;
        localStorage.setItem("user", JSON.stringify(user));
        this.user = user;
      });
    },
    async login(username, password) {
      const auth = await instance
        .post("/login", {
          username,
          password,
        })
        .then((response) => {
          return response.data.data;
        });

      const token = {
        token: auth.token,
        refresh_token: auth.refresh,
      };

      this.token = token;
      localStorage.setItem("token", JSON.stringify(token));
      if (auth.token) {
        await this.getMenu();
        await this.me();
      }
      router.push(this.returnUrl || "/");
    },
    async refresh(refresh_token) {
      const refresh = await instance
        .post("/refresh", { refresh_token })
        .then((response) => {
          return response.data.data;
        });
      const token = {
        token: refresh.token,
        refresh_token: refresh_token,
      };

      this.token = token;
      localStorage.setItem("token", JSON.stringify(token));
    },
    async getMenu() {
      const respon = await instance.get("/menu").then((response) => {
        return response.data.data;
      });
      this.menu = respon;
      localStorage.setItem("menu", JSON.stringify(respon));
    },
    async logout() {
      const token = this.user.token;
      if (token) {
        await instance
          .post("/logout", { token })
          .then((response) => {
            return response.data.data;
          })
          .catch((error) => {
            console.log(443, error);
          });
      }
      this.user = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("menu");
      localStorage.removeItem("token");
      localStorage.removeItem("app-detail");
      router.push("/login");
    },
    clearData() {
      this.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("menu");
      localStorage.removeItem("token");
      localStorage.removeItem("app-detail");
      router.push("/login");
    },
  },
});
