<template>
  <div class="app-container">
    <div class="app-header">
      <LangSwitcher class="positioned-right top-0" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.app-container {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  align-items: center;
}
.app-header {
  width: 100vw;
  display: relative;
}
.positioned-right {
  position: absolute;
  right: 0;
  padding: 1rem;
}
</style>
