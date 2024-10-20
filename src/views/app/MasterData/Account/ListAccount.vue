<script setup>
import { ref } from "vue";
import { useAccountStore } from "@/stores";

const account = ref(null);
// fetch("https://budget-app.afdz.my.id/api/master-data/account")
//   .then((response) => response.json())
//   .then((data) => (account.value = data));

const accountStore = useAccountStore();

async function fetchData() {
  const response = await accountStore.getPagination({});
  const data = await response;
  console.log(data);
}
fetchData();
</script>
<template>
  <div class="content">
    <BaseBlock title="Account">
      <template #options>
        <RouterLink to="/account/add">
          <button type="button" class="btn-block-option">
            <i class="si si-plus"></i> Add New
          </button>
        </RouterLink>
      </template>
      <template v-slot="slotProps">
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Tipe Akun</th>
                <th>Paylater</th>
                <th>Limit Akun</th>
                <th>Komentar</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in account" :key="user.id">
                <td class="fw-semibold fs-sm">
                  {{ slotProps.account.name }}
                </td>
                <td class="fw-semibold fs-sm">
                  {{ slotProps.account.account_type }}
                </td>
                <td class="fw-semibold fs-sm">
                  {{ slotProps.account.is_paylater }}
                </td>
                <td class="fw-semibold fs-sm">
                  {{ slotProps.account.account_limit }}
                </td>
                <td class="fw-semibold fs-sm">
                  {{ slotProps.account.remark }}
                </td>
                <!-- <td class="fs-sm">
                {{ account.id }}
              </td> -->
                <!-- <td>
                  <span
                    :class="`fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-${user.labelVariant}-light text-${user.labelVariant}`"
                  >
                    {{ user.labelText }}
                  </span>
                </td> -->
                <td class="text-center">
                  <div class="btn-group">
                    <RouterLink to="/account/:id">
                      <button
                        type="button"
                        class="btn btn-sm btn-alt-secondary"
                      >
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </button>
                    </RouterLink>
                    <button
                      type="button"
                      class="btn btn-sm btn-alt-secondary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i class="fa fa-fw fa-times"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </BaseBlock>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Delete Account</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Apakah anda yakin menghapus akun?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button type="button" class="btn btn-primary">Yes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
