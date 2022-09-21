<script setup>
import { sourceList } from "../utils/constants";

import { store } from "../utils/store";

import BaseUploadFile from "./BaseUploadFile.vue";

const source = sourceList.find((s) => s.id === store.source);

const title = source.title;
const prepareFileMessage = source.prepareFileMessage;
</script>

<template>
  <div class="upload-file">
    <BaseUploadFile>
      <template v-slot:title>{{ title }}</template>
      <template v-slot:prepareFileMessage>{{ prepareFileMessage }}</template>
    </BaseUploadFile>
  </div>
</template>

<style scoped>
.upload-file {
  height: 100%;
}
</style>
