<template>
  <div
    class="flex justify-between p-4 rounded-lg"
    :style="{
      backgroundColor: color,
    }"
  >
    <!-- TODO: Styling could be improved -->
    <div>{{ description }}</div>
    <div>{{ displayAmount }}</div>
  </div>
</template>
<script setup lang="ts">
/* FIXME: Vitest currently doesn't play nice with Nuxt 3 autoimports, which results in these explicit imports. */
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const props = defineProps<{
  amount: number;
  description: string;
  color: string;
}>();

const { locale } = useI18n();

const displayAmount = computed(() => {
  return Number(props.amount.toFixed(2)).toLocaleString(locale.value) + "€";
});
</script>
