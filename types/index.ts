// ~/types/index.ts

export {};

declare global {
  /* FIXME: 
  These types would ideally be generated automatically by the ORM package or a similar auto type defintion generator. 
  */
  interface CreditCard {
    id: string;
    description: string;
  }

  interface Transaction {
    id: string;
    amount: number;
    description: string;
  }
}
