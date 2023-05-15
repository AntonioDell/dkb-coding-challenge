<template>
  <!-- TODO: Styling could be improved -->
  <div
    role="button"
    :style="{ backgroundColor: color }"
    class="flex flex-col justify-start gap-4 p-4 rounded-lg h-40"
  >
    <div>{{ localizedDescription }}</div>
    <div>{{ id }}</div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const porps = defineProps<{
  description: string;
  id: string;
  color: string;
}>();

const { t } = useI18n();

const localizedDescription = computed(() => {
  return t(porps.description);
});
</script>
