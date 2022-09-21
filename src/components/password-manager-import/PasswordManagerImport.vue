<script setup>
import { store } from "./utils/store";

import { ref, watch } from "vue";

import IconXMark from "../icons/IconXMark.vue";
import IconArrowLeft from "../icons/IconArrowLeft.vue";

import ChooseSource from "./steps/ChooseSource.vue";
import UploadFile from "./steps/UploadFile.vue";
import ChooseLabels from "./steps/ChooseLabels.vue";
import ReviewAndImport from "./steps/ReviewAndImport.vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const stepNameList = [
  "Choose source",
  "Upload file",
  "Choose labels",
  "Review & Import",
];
const stepList = [ChooseSource, UploadFile, ChooseLabels, ReviewAndImport];
const currentStep = ref(0);

const handleBackNavigate = () => {
  store.setSource(null);
  currentStep.value = currentStep.value - 1;
};

watch(
  () => props.show,
  (value) => {
    if (value) {
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
  }
);

watch(
  () => store.source,
  (value) => {
    if (!value) {
      return;
    }

    currentStep.value = 1;
  }
);
</script>

<template>
  <div class="password-manager-import">
    <transition name="slice-up">
      <div v-if="show" class="container">
        <div class="header">
          <div class="left">
            <button
              v-if="currentStep === 0"
              class="button-close -icon"
              @click="$emit('close')"
            >
              <IconXMark />
            </button>
            <button
              v-if="currentStep > 0"
              class="button-back -icon"
              @click="handleBackNavigate"
            >
              <IconArrowLeft />
            </button>
          </div>
          <div class="center">
            <ul class="step-list">
              <li
                v-for="(stepName, index) in stepNameList"
                :key="stepName"
                class="item"
                :class="{ '-active': index <= currentStep }"
              >
                <div v-if="index > 0" class="divider"></div>
                <div class="bullet"></div>
                {{ stepName }}
              </li>
            </ul>
          </div>
          <div class="right"></div>
        </div>
        <div class="main">
          <transition name="fade">
            <component :is="stepList[currentStep]"></component>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.container {
  --spaces-1: 24px;
  --spaces-2: 16px;
  --spaces-3: 12px;
  --spaces-4: 10px;

  --colors-step-inactive: #d9d9d9;
  --colors-step-active: #7772f8;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  height: 100vh;
  max-height: 100vh;
  width: 100vw;

  overflow: hidden;

  background-color: var(--colors-white);

  color: var(--colors-black);

  z-index: 999;
}

.header,
.main {
  padding: var(--spaces-1);
}

.header {
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr;

  align-items: center;
}

.header > .center {
  text-align: center;
}

.step-list {
  display: flex;
  justify-content: center;
}

.step-list > .item {
  display: flex;

  align-items: center;
}

.step-list > .item {
  color: var(--colors-grey);
}

.step-list > .item > .bullet,
.step-list > .item > .divider {
  background-color: var(--colors-step-inactive);
}

.step-list > .item > .bullet {
  display: block;

  height: 8px;
  width: 8px;

  margin-right: 8px;

  border-radius: 100%;
}

.step-list > .item.-active {
  color: var(--colors-black);
}

.step-list > .item.-active > .bullet {
  background-color: var(--colors-step-active);
}

.step-list > .item > .divider {
  height: 2px;
  width: 16px;

  margin: 0 8px;
}

.main {
  position: relative;

  height: 100%;
  max-height: 100%;
  width: 100%;
  max-width: 100%;

  overflow: hidden;
  overflow-y: auto;
}

.button-close.-icon,
.button-back.-icon {
  height: 24px;
  width: 24px;

  color: var(--colors-grey);
}

.slice-up-enter-active,
.slice-up-leave-active {
  transition: transform 0.5s;
}
.slice-up-enter,
.slice-up-leave-to {
  transform: translateY(100vh);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  position: absolute;

  opacity: 0;
}
</style>
