import { defineStore } from "pinia";
import { instance } from "@/helpers";
import router from "@/router";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: cookies.get("user"),
    token: cookies.get("token"),
    refresh_token: cookies.get("refresh_token"),
    returnUrl: null,
  }),
  actions: {
    async me() {
      await instance.get("/me").then((response) => {
        const user = response.data;
        cookies.set("user", JSON.stringify(user));
        this.user = user;

        // console.log("saya", response.data);
      });
    },
    async login(email, password) {
      const auth = await instance
        .post("/login", {
          email,
          password,
        })
        .then((response) => {
          const result = response.data;
          this.token = result.token;
          cookies.set("token", result.token);
          cookies.set("refresh_token", result.refresh);

          return result;
        });

      if (auth.token) {
        // await this.getMenu();
        await this.me();
      }
      router.push(this.returnUrl || "/");
    },
    async refresh(refresh_token) {
      const result = await instance
        .post("/refresh", { refresh_token })
        .then((response) => {
          const refresh = response.data;
          cookies.set("token", refresh.token);
          cookies.set("refresh_token", refresh.refresh);

          return refresh;
        });

      if (result.token) {
        this.token = result.token;
      }
    },
    async logout() {
      // const token = this.user.token;
      // if (token) {
      //   await instance
      //     .post("/logout", { token })
      //     .then((response) => {
      //       return response.data.data;
      //     })
      //     .catch((error) => {
      //       console.log(443, error);
      //     });
      // }
      this.clearData();
    },
    clearData() {
      this.user = null;
      this.token = null;
      this.refresh_token = null;
      cookies.remove("user");
      cookies.remove("token");
      cookies.remove("refresh_token");
      router.push("/login");
    },
  },
});
