import express from 'express';
import cors from 'cors';
import { TransactionSDK } from './services/TransactionSDK';

const app = express();
app.use(cors());


const transactionSDK = new TransactionSDK("v2");

app.get('/api/transactions', (req, res) => {
  res.json(transactionSDK.getAllTransactions());
});

app.get('/api/transactions/:unique_id', (req, res) => {
  const transaction = transactionSDK.getTransactionById(req.params.unique_id);
  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).send({ error: 'Transaction not found' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});