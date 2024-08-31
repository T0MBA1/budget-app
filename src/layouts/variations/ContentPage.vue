<script setup>
import { useTemplateStore } from "@/stores/template";

import BaseLayout from "@/layouts/BaseLayout.vue";

// Main store
const store = useTemplateStore();

// Set default elements for this layout
store.setLayout({
  header: true,
  sidebar: false,
  sideOverlay: false,
  footer: true,
});

// Set various template options for this layout variation
store.headerStyle({ mode: "dark" });
store.mainContent({ mode: "boxed" });
</script>

<template>
  <BaseLayout>
    <!-- Header Content -->
    <!-- Using the available v-slot, we can override the default Header content from layouts/partials/Header.vue -->
    <template #header-content>
      <!-- Left Section -->
      <div class="d-flex align-items-center">
        <!-- Logo -->
        <RouterLink
          :to="{ name: 'dashboard' }"
          class="fw-semibold fs-5 tracking-wider text-dual me-3"
        >
          OneUI
          <span class="fw-normal">Vue</span>
        </RouterLink>
        <!-- END Logo -->
      </div>
      <!-- END Left Section -->

      <!-- Right Section -->
      <div class="d-flex align-items-center">
        <!-- User Dropdown -->
        <div class="dropdown d-inline-block ms-2">
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary d-flex align-items-center"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              class="rounded-circle"
              src="/assets/media/avatars/avatar10.jpg"
              alt="Header Avatar"
              style="width: 21px"
            />
            <span class="d-none d-sm-inline-block ms-2">John</span>
            <i
              class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1"
            ></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown"
          >
            <div
              class="p-3 text-center bg-body-light border-bottom rounded-top"
            >
              <img
                class="img-avatar img-avatar48 img-avatar-thumb"
                src="/assets/media/avatars/avatar10.jpg"
                alt="Header Avatar"
              />
              <p class="mt-2 mb-0 fw-medium">John Smith</p>
              <p class="mb-0 text-muted fs-sm fw-medium">Web Developer</p>
            </div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="javascript:void(0)"
              >
                <span class="fs-sm fw-medium">Inbox</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>

              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="javascript:void(0)"
              >
                <span class="fs-sm fw-medium">Settings</span>
              </a>
            </div>
            <div role="separator" class="dropdown-divider m-0"></div>
            <div class="p-2">
              <RouterLink
                :to="{ name: 'signin' }"
                class="dropdown-item d-flex align-items-center justify-content-between"
              >
                <span class="fs-sm fw-medium">Log Out</span>
              </RouterLink>
            </div>
          </div>
        </div>
        <!-- END User Dropdown -->
      </div>
      <!-- END Right Section -->
    </template>
    <!-- END Header Content -->

    <!-- Page Top Content -->
    <!-- END Page Top Content -->
  </BaseLayout>
</template>
