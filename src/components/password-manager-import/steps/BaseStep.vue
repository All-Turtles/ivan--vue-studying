<template>
  <div class="base-step">
    <h2 class="title">
      <slot name="title">Where are you importing from?</slot>
    </h2>
    <slot></slot>
  </div>
</template>

<style scoped>
.base-step {
  display: flex;
  flex-direction: column;

  height: 100%;
}
.title {
  margin-bottom: 16px;

  font-weight: 400;
  font-size: 22px;
}
</style>
