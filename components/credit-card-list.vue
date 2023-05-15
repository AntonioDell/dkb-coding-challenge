<template>
  <div class="flex justify-between">
    <CreditCard
      v-for="(card, index) in cards"
      v-bind="card"
      @click="onCardClicked(card.id)"
      :data-test-id="`card-${card.id}`"
      class="w-60"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  cards: { id: string; description: string; color: string }[];
  modelValue: string;
}>();

const emits = defineEmits<{
  (event: "update:modelValue", selected: string): void;
}>();


const selected = ref(props.modelValue);

const onCardClicked = (id: string) => {
  if (selected.value !== id) {
    selected.value = id;
    emits("update:modelValue", selected.value);
  }
};
</script>

<style scoped>
.selected-border {
  box-sizing: border-box;
  border: 2px solid black;
}
</style>
