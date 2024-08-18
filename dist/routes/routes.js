"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TransactionSDK_1 = require("./../services/TransactionSDK");
const router = (0, express_1.Router)();
const transactionSDK = new TransactionSDK_1.TransactionSDK("v2");
router.get('/transactions', (req, res) => {
    res.json(transactionSDK.getAllTransactions());
});
router.get('/transactions/:unique_id', (req, res) => {
    const transaction = transactionSDK.getTransactionById(req.params.unique_id);
    if (transaction) {
        res.json(transaction);
    }
    else {
        res.status(404).send({ error: 'Transaction not found' });
    }
});
exports.default = router;
