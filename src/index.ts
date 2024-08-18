import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

import transactions from "./data.json";
// import transactions from "./datav2.json";

app.get("/api/transactions", (req, res) => {
  res.json(transactions["payment_transactions"]);
});

app.get("/api/transactions/:unique_id", (req, res) => {
  const transaction = transactions["payment_transactions"].find(
    (t) => t.unique_id === req.params.unique_id
  );
  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).send({ error: "Transaction not found" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
