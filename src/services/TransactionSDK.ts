import transactionsDataV1 from "./../data/data.json";
import transactionsDataV2 from "./../data/data-v2.json";

export class TransactionSDK {
  private transactions: any[];

  constructor(version: "v1" | "v2") {
    this.transactions =
      version === "v1"
        ? transactionsDataV1.payment_transactions
        : transactionsDataV2.payment_transactions;
  }

  getAllTransactions() {
    return this.transactions;
  }

  getTransactionById(unique_id: string) {
    return (
      this.transactions.find(
        (transaction) => transaction.unique_id === unique_id
      ) || null
    );
  }
}