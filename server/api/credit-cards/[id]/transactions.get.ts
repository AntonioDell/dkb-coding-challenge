import type { H3Error } from "h3";

export default defineEventHandler((event) => {
  /* Authentication is handled by middleware -> We can assume the user is authenticated */
  const creditCardId = getRouterParam(event, "id");
  if (!creditCardId) {
    setResponseStatus(event, 201);
    return [];
  }
  const query = getQuery(event);

  /* FIXME:
    Normnally the transactions would be retrieved from a DB and querying them would be done mostly on a DB level for performance.
  */
  const transactions: Record<string, Transaction[]> = {
    "lkmfkl-mlfkm-dlkfm": [
      { id: "lkmlk-5kkm5-55gg", amount: 123.88, description: "Food" },
      { id: "43mm3-lkm4-55gg", amount: 33.48, description: "Snack" },
      { id: "eefe-5kkm5-ffeefe", amount: 288.38, description: "Tickets" },
    ],
    "elek-n3lk-4m3lk4": [
      { id: "lkmlk-5kkm5-55gg", amount: 21.88, description: "T-Shirt" },
      { id: "43mm3-lkm4-55gg", amount: 533.48, description: "Smart Phone" },
      { id: "eefe-5kkm5-ffeefe", amount: 2.58, description: "Chocolate Bar" },
    ],
  };
  /* FIXME: 
    Normally the credit card id would be checked against known credit card ids for the user and based on the result either an empty list or a 401 would be returned.
    For simplicity we just return an empty list.
  */
  if (!(creditCardId in transactions)) {
    return [];
  }

  /* FIXME: 
    Normally a more sophisticated query interpretor would be used to create a DB query from query params.
    This apporach also doesn't provide chaining of multiple filters.
  */
  if (query.amount) {
    const [operator, value] = (query.amount as string).split(" ");
    if (operator === "gte" && (Number(value) === 0 || Number(value))) {
      return transactions[creditCardId].filter(
        (transaction) => transaction.amount >= Number(value)
      );
    }
  }

  return transactions[creditCardId];
});
