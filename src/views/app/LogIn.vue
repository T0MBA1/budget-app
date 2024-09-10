<script setup>
import { reactive } from "vue";
import { useTemplateStore } from "@/stores/template";
import { Form } from "vee-validate";
import { useAuthStore } from "@/stores";

// Main store and Router
const store = useTemplateStore();
const authStore = useAuthStore();

// Input state variables
const form = reactive({
  email: "afd.zik@gmail.com",
  password: "@A5Agrapana",
});

// On form submission
async function onSubmit(values, { setErrors }) {
  await authStore
    .login(form.email, form.password)
    .catch((error) => setErrors(error));
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

              <Form @submit="onSubmit" v-slot="{ errors, isSubmitting }">
                <div class="py-3">
                  <div class="mb-4">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      v-model="form.email"
                      class="form-control form-control-alt form-control-lg"
                      :class="{ 'is-invalid': errors.email }"
                    />
                    <div class="invalid-feedback animated fadeIn">
                      {{ errors.email }}
                    </div>
                  </div>
                  <div class="mb-4">
                    <input
                      name="password"
                      type="password"
                      v-model="form.password"
                      placeholder="Password"
                      class="form-control form-control-alt form-control-lg"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <div class="invalid-feedback animated fadeIn">
                      {{ errors.password }}
                    </div>
                  </div>
                  <div
                    v-if="errors.message"
                    class="alert alert-danger mt-3 mb-0"
                  >
                    {{ errors.message }}
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                  <button :disabled="isSubmitting" class="btn btn-alt-primary">
                    <i class="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i>
                    Login
                  </button>
                </div>
              </Form>
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
