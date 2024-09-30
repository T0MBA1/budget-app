<script setup>
import { reactive } from "vue";

// Example data
const users = reactive([
  {
    id: 1,
    name: "Adam McCoy",
    avatar: "avatar10",
    href: "javascript:void(0)",
    labelVariant: "success",
    labelText: "VIP",
  },
  {
    id: 2,
    name: "Betty Kelley",
    avatar: "avatar2",
    href: "javascript:void(0)",
    labelVariant: "info",
    labelText: "Business",
  },
  {
    id: 3,
    name: "Jesse Fisher",
    avatar: "avatar9",
    href: "javascript:void(0)",
    labelVariant: "info",
    labelText: "Business",
  },
  {
    id: 4,
    name: "Ryan Flores",
    avatar: "avatar12",
    href: "javascript:void(0)",
    labelVariant: "warning",
    labelText: "Trial",
  },
  {
    id: 5,
    name: "Alice Moore",
    avatar: "avatar4",
    href: "javascript:void(0)",
    labelVariant: "danger",
    labelText: "Disabled",
  },
]);
</script>
<template>
  <div class="content">
    <BaseBlock title="Account">
      <template #options>
        <button type="button" class="btn-block-option">
          <i class="si si-plus"></i> Add New
        </button>
      </template>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Access</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="fw-semibold fs-sm">
              {{ user.name }}
            </td>
            <td class="fs-sm">
              client{{ user.id }}<em class="text-muted">@example.com</em>
            </td>
            <td>
              <span
                :class="`fs-xs fw-semibold d-inline-block py-1 px-3 rounded-pill bg-${user.labelVariant}-light text-${user.labelVariant}`"
              >
                {{ user.labelText }}
              </span>
            </td>
            <td class="text-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-alt-secondary">
                  <i class="fa fa-fw fa-pencil-alt"></i>
                </button>
                <button type="button" class="btn btn-sm btn-alt-secondary">
                  <i class="fa fa-fw fa-times"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </BaseBlock>
  </div>
</template>
