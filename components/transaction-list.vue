<template>
  <div class="min-height flex flex-col gap-4 overflow-scroll">
    <Transaction v-for="transaction in transactions" v-bind="transaction" />
  </div>
</template>
<script setup lang="ts">
defineProps<{ transactions: (Transaction & { color: string })[] }>();
</script>
<style scoped>
.min-height {
  min-height: 6rem;
}
</style>
