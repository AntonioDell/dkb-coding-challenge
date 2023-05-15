<template>
  <div class="container">
    <CreditCardList
      v-if="cards?.length"
      :cards="coloredCards"
      v-model="selectedCardId"
    />
    <AmountFilter v-model="amountFilter" />
    <TransactionList
      v-if="transactions.length"
      :transactions="coloredTransactions"
    />
  </div>
</template>
<script setup lang="ts">
import useColoredCardTransactions from "~/composables/useColoredCardTransactions.js";

/* FIXME:
  It is assumed that the proper authentication has been set as secure HTTP Only cookie.
  In case of invalid authentication, the server should send a redirect response, which will be automatically followed.
*/
const { data: cards } = useFetch("/api/credit-cards");
const transactions = ref<Transaction[]>([]);
const selectedCardId = ref("");

const { coloredCards, coloredTransactions } = useColoredCardTransactions(
  cards,
  transactions,
  selectedCardId
);

const amountFilter = ref("");
const query = computed(() => {
  if (!amountFilter.value) {
    return null;
  }
  return { amount: `gte ${Number(amountFilter.value)}` };
});

watchEffect(() => {
  if (selectedCardId.value) amountFilter.value = "";
});

watch([query, selectedCardId], async () => {
  if (!selectedCardId.value) {
    transactions.value = [];
    return;
  }
  const data = await $fetch(
    `/api/credit-cards/${selectedCardId.value}/transactions`,
    {
      query: { ...query.value },
    }
  );
  transactions.value = data || [];
});

</script>
