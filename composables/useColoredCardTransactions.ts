export default function (
  cards: Ref<CreditCard[] | null>,
  transactions: Ref<Transaction[]>,
  activeCardId: Ref<string>
) {
  /* FIXME:
  The colors should ideally be defined on the cards property to ensure that all frontends (f.e. mobile apps) show the same color for the same card.
*/
  const cardColors = ["lightgrey", "lightblue"];

  const coloredCards = computed(() => {
    if (!cards.value?.length) return [];
    return cards.value.map((card, index) => ({
      ...card,
      color: cardColors[index],
    }));
  });

  const coloredTransactions = ref<(Transaction & { color: string })[]>([]);
  watch([transactions], () => {
    if (!transactions.value.length || !activeCardId.value) {
      coloredTransactions.value = [];
      return;
    }

    coloredTransactions.value = transactions.value.map((transaction) => {
      const selectedCardColor =
        coloredCards.value.find((card) => card.id === activeCardId.value)
          ?.color || "";
      return { ...transaction, color: selectedCardColor };
    });
  });

  return { coloredCards, coloredTransactions };
}
