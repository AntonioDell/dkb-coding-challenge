<template>
  <div class="money-suffix flex flex-col gap-2">
    <label for="amount" class="font-medium">{{ t("Amount Filter") }}</label>
    <!-- TODO: Client side validation could be improved -->
    <input
      class="border-black border-2 rounded-xl p-4"
      name="amount"
      :placeholder="t('Amount')"
      data-test-id="input"
      :value="modelValue"
      @input="onInput"
      type="number"
    />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps<{ modelValue: string }>();
const emits = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();
const onInput = (event: Event) => {
  emits("update:modelValue", (event.target as HTMLInputElement).value);
};

const { t } = useI18n();
</script>
<style scoped></style>
