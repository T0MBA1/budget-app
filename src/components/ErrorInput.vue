<script setup>
const props = defineProps({
  errors: {
    type: Array,
    description: "The errors of input",
  },
});
</script>

<template>
  <div v-if="props.errors" class="invalid-feedback animated fadeIn ps-2">
    <template v-if="props.errors.length > 1">
      <li v-for="errorInput in props.errors" :key="errorInput">
        {{ errorInput }}
      </li>
    </template>
    <template v-else>
      {{ props.errors[0] }}
    </template>
  </div>
</template>
