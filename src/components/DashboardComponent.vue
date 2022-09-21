<script setup>
import { ref } from "vue";

import PasswordManagerImport from "./password-manager-import/PasswordManagerImport.vue";

const show = ref(false);

const closeModal = () => {
  show.value = !show.value;
};
</script>

<template>
  <div class="dashboard-component">
    <h1>Beautiful Dashboard</h1>
    <button @click="show = !show">Modal {{ show ? "Show" : "Hide" }}</button>
    <PasswordManagerImport :show="show" @close="closeModal" />
  </div>
</template>

<style scoped>
.dashboard-component {
  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;

  padding: 30px;
}

button {
  min-width: 200px;

  padding: 12px;

  border: 1px solid var(--colors-white);
  border-radius: 9999px;

  text-align: center;
}
</style>
