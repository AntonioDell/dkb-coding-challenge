export default defineEventHandler((event) => {
  /* Authentication is handled by middleware -> We can assume the user is authenticated */

  /* FIXME: 
    The cards would normally be retrieved from a database based on the authentication information (f.e. user id in JWT token).
    For the purpose of this exercise we will just always return them directly.
  */
  const creditCards: CreditCard[] = [
    { id: "lkmfkl-mlfkm-dlkfm", description: "Private Card" },
    { id: "elek-n3lk-4m3lk4", description: "Business Card" },
  ];

  return creditCards;
});
