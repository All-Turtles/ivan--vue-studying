<script setup>
import { sourceList } from "../utils/constants";

import { store } from "../utils/store";

import BaseStep from "./BaseStep.vue";

const passwordManagerList = sourceList.filter(
  (s) => s.group === "password-manager"
);

const browserList = sourceList.filter((s) => s.group === "browser");

const myComputerList = sourceList.filter((s) => s.group === "my-computer");
</script>

<template>
  <div class="choose-source">
    <BaseStep>
      <template v-slot:title>Where are you importing from?</template>

      <div class="provider-type-list">
        <div class="item">
          <h3 class="provider-name">Password managers</h3>
          <div class="provider-list">
            <button
              v-for="item in passwordManagerList"
              :key="item.id"
              class="item"
              @click="store.setSource(item.id)"
            >
              <div class="logo -placeholder"></div>
              <div class="name">{{ item.name }}</div>
            </button>
          </div>
        </div>
        <div class="item">
          <h3 class="provider-name">Browsers</h3>
          <div class="provider-list">
            <button
              v-for="item in browserList"
              :key="item.id"
              class="item"
              @click="store.setSource(item.id)"
            >
              <div class="logo -placeholder"></div>
              <div class="name">{{ item.name }}</div>
            </button>
          </div>
        </div>
        <div class="item">
          <h3 class="provider-name">My computer</h3>
          <div class="provider-list">
            <button
              v-for="item in myComputerList"
              :key="item.id"
              class="item"
              @click="store.setSource(item.id)"
            >
              <div class="logo -placeholder"></div>
              <div class="name">{{ item.name }}</div>
            </button>
          </div>
        </div>
      </div>
    </BaseStep>
  </div>
</template>

<style scoped>
.provider-type-list {
  display: flex;
  flex-wrap: wrap;

  gap: var(--spaces-1);
}

.provider-type-list > .item {
  flex: 1;
}

.provider-name {
  margin-bottom: 12px;

  color: var(--colors-grey);
  font-weight: 400;
  font-size: 14px;
}

.provider-list {
  display: flex;
  flex-direction: column;
  gap: var(--spaces-3);
}

.provider-list > .item {
  display: flex;
  align-items: center;
  gap: var(--spaces-2);

  padding: var(--spaces-3);

  border: 1px solid var(--colors-grey-light);
  border-radius: 8px;

  transition: background-color 0.3s;
}

.provider-list > .item:hover {
  background-color: var(--colors-grey-lighter);
}

.provider-list > .item > .logo.-placeholder {
  height: 44px;
  width: 44px;

  border-radius: 100%;

  background-image: var(--colors-placeholder);
}

.provider-list > .item > .name {
  font-weight: 400;
  font-size: 16px;
}
</style>
