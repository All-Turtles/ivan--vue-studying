<script setup>
import { ref } from "vue";

import FileCSV from "../../icons/FileCSV.vue";
import FileCSVHover from "../../icons/FileCSVHover.vue";
import FileCSVUploading from "../../icons/FileCSVUploading.vue";
import FileCSVSuccess from "../../icons/FileCSVSuccess.vue";
import FileCSVFail from "../../icons/FileCSVFail.vue";

import BaseStep from "./BaseStep.vue";

/**
 * @see https://medium.com/featurepreneur/how-to-create-drag-drop-file-upload-311e4ffeb56f
 */

const inputRef = ref();

const handleBrowserYourComputerClick = () => {
  inputRef.value.click();
};

// type status = 'initial' | 'hover' | 'uploading' | 'success' | 'fail'
const inputFileStatus = ref("initial");
// const inputFileStatus = ref("hover");
// const inputFileStatus = ref("uploading");
// const inputFileStatus = ref("success");
// const inputFileStatus = ref("fail");
</script>

<template>
  <div class="upload-file">
    <BaseStep>
      <template v-slot:title><slot name="title"></slot></template>

      <div class="main step-list">
        <div class="item">
          <div class="header">
            <div class="bullet">1</div>
            <h3 class="title"><slot name="prepareFileMessage"></slot></h3>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
        <div class="item">
          <div class="header">
            <div class="bullet">2</div>
            <h3 class="title">Upload CSV file</h3>
          </div>
          <div class="content">
            <div
              class="drop-zone"
              :class="{
                '-hover': inputFileStatus === 'hover',
                '-uploading': inputFileStatus === 'uploading',
                '-success': inputFileStatus === 'success',
                '-fail': inputFileStatus === 'fail',
              }"
            >
              <div class="prompt">
                <FileCSV v-if="inputFileStatus === 'initial'" class="icon" />
                <FileCSVHover v-if="inputFileStatus === 'hover'" class="icon" />
                <FileCSVUploading
                  v-if="inputFileStatus === 'uploading'"
                  class="icon"
                />
                <FileCSVSuccess
                  v-if="inputFileStatus === 'success'"
                  class="icon"
                />
                <FileCSVFail v-if="inputFileStatus === 'fail'" class="icon" />

                <p class="description">
                  Drag and drop a .csv file here or
                  <button class="link" @click="handleBrowserYourComputerClick">
                    browse your computer
                  </button>
                </p>
              </div>
              <input ref="inputRef" type="file" name="csv-file" class="input" />
            </div>
          </div>
        </div>
      </div>
    </BaseStep>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spaces-1);

  height: 100%;
}

.step-list > .item {
  display: flex;
  flex-direction: column;
}

.step-list > .item > .header {
  display: flex;

  align-items: center;

  gap: var(--spaces-3);

  margin-bottom: var(--spaces-2);
}

.step-list > .item > .header > .bullet {
  display: flex;

  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;

  border-radius: 100%;

  background-color: var(--colors-black);

  color: var(--colors-white);

  font-size: 14px;
}

.step-list > .item > .header > .title {
  margin: 0;

  font-weight: 500;
  font-size: 14px;
}

.step-list > .item > .content {
  height: 100%;
}

.drop-zone {
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  height: 100%;

  border: 1px dashed rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  overflow: hidden;
}

.drop-zone > .prompt {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 340px;
  width: 340px;

  background-color: #fafafa;
  border-radius: 100%;
}

.drop-zone > .prompt > .icon {
  width: 78px;
  height: 85px;
}

.drop-zone > .prompt > .description {
  width: 206px;

  margin-top: var(--spaces-2);

  color: var(--colors-grey);
  font-weight: 400;
  font-size: 14px;
  text-align: center;
}

.drop-zone > .prompt > .description > .link {
  color: #7772f8;
}

.drop-zone.-hover,
.drop-zone.-uploading {
  background: rgba(119, 114, 248, 0.03);
  border: 1px dashed rgba(119, 114, 248, 0.5);
}

.drop-zone.-hover > .prompt,
.drop-zone.-uploading > .prompt {
  background: rgba(119, 114, 248, 0.04);
}

.drop-zone.-success {
  background: rgba(196, 255, 219, 0.05);
  border: 1px dashed #b9d3cc;
}

.drop-zone.-success > .prompt {
  background: rgba(212, 229, 224, 0.09);
}

.drop-zone.-fail {
  background: rgba(119, 114, 248, 0.03);
  border: 1px dashed rgba(119, 114, 248, 0.5);
}

.drop-zone.-fail > .prompt {
  background: rgba(119, 114, 248, 0.04);
}

.drop-zone > .input {
  position: absolute;
  top: -1px;
  left: -1px;

  height: 1px;
  width: 1px;

  opacity: 0;
}
</style>
