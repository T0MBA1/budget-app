import { defineStore } from "pinia";
import { instance } from "@/helpers";
import router from "@/router";

const PAGE_URL = "/master-data/account";

export const useAccountStore = defineStore({
  id: "account",
  state: () => ({
    accounts: [],
    account: {},
  }),
  actions: {
    async getPagination(request) {
      return instance.get(PAGE_URL, { params: request }).then((response) => {
        return response.data.data;
      });
    },
    show(id) {
      return instance.get(`${PAGE_URL}/${id}`).then((response) => {
        return response.data.data;
      });
    },
    async store(params) {
      await instance.post(PAGE_URL, params).then((response) => {
        const res = response.data;
        if (res.status === "success") {
          router.push(PAGE_URL);
        }
      });
    },
    async update(id, params) {
      await instance.put(`${PAGE_URL}/${id}`, params).then((response) => {
        const res = response.data;
        if (res.status === "success") {
          router.push(PAGE_URL);
        }
      });
    },
    delete(id) {
      return instance.delete(`${PAGE_URL}/${id}`).then((response) => {
        return response.data.data;
      });
    },
  },
});
