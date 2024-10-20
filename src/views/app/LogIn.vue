<script setup>
import { reactive } from "vue";
import { useTemplateStore } from "@/stores/template";
import { useAuthStore } from "@/stores";

// Main store and Router
const store = useTemplateStore();
const authStore = useAuthStore();

// Input state variables
const value = reactive({
  email: "afd.zik@gmail.com",
  password: "@A5Agrapana",
});

const form = reactive({
  email: null,
  password: null,
  errors: {
    email: null,
    password: null,
  },
});

// On form submission
async function onSubmit() {
  form.isSubmitting = true;
  await authStore.login(value.email, value.password).catch((error) => {
    form.errors = error.data;
    form.errorMessage = error.message;
    form.isSubmitting = false;
  });
}
</script>

<template>
  <!-- Page Content -->
  <div class="hero-static d-flex align-items-center">
    <div class="w-100">
      <!-- Sign In Section -->
      <div class="bg-body-extra-light">
        <div class="content content-full">
          <div class="row g-0 justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-4 py-4 px-4 px-lg-5">
              <!-- Header -->
              <div class="text-center">
                <p class="mb-2">
                  <i class="fa fa-2x fa-circle-notch text-primary"></i>
                </p>
                <h1 class="h4 mb-1">Log In</h1>
              </div>
              <!-- END Header -->

              <form @submit.prevent="onSubmit">
                <div
                  v-if="form.errorMessage"
                  class="alert alert-danger mt-3 mb-0"
                >
                  {{ form.errorMessage }}
                </div>
                <div class="py-3">
                  <div class="mb-4">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      v-model="value.email"
                      class="form-control form-control-alt form-control-lg"
                      :class="{ 'is-invalid': form.errors.email }"
                      @blur="form.errors.email = null"
                    />
                    <ErrorInput :errors="form.errors.email" />
                  </div>
                  <div class="mb-4">
                    <input
                      name="password"
                      type="password"
                      v-model="value.password"
                      placeholder="Password"
                      class="form-control form-control-alt form-control-lg"
                      :class="{ 'is-invalid': form.errors.password }"
                      @blur="form.errors.password = null"
                    />
                    <ErrorInput :errors="form.errors.password" />
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                  <button
                    :disabled="form.isSubmitting"
                    class="btn btn-alt-primary"
                  >
                    <i class="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>
                    Login
                  </button>
                </div>
              </form>
              <!-- END Sign In Form -->
            </div>
          </div>
        </div>
      </div>
      <!-- END Sign In Section -->

      <!-- Footer -->
      <div class="fs-sm text-center text-muted py-3">
        <strong>{{ store.app.name + " " + store.app.version }}</strong> &copy;
        {{ store.app.copyright }}
      </div>
      <!-- END Footer -->
    </div>
  </div>
  <!-- END Page Content -->
</template>
