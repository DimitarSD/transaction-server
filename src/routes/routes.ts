import { Router } from 'express';
import { TransactionSDK } from './../services/TransactionSDK';

const router = Router();
const transactionSDK = new TransactionSDK("v2");

router.get('/transactions', (req, res) => {
  res.json(transactionSDK.getAllTransactions());
});

router.get('/transactions/:unique_id', (req, res) => {
  const transaction = transactionSDK.getTransactionById(req.params.unique_id);
  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).send({ error: 'Transaction not found' });
  }
});

export default router;