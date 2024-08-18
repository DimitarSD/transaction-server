"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const TransactionSDK_1 = require("./services/TransactionSDK");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const transactionSDK = new TransactionSDK_1.TransactionSDK("v2");
app.get('/api/transactions', (req, res) => {
    res.json(transactionSDK.getAllTransactions());
});
app.get('/api/transactions/:unique_id', (req, res) => {
    const transaction = transactionSDK.getTransactionById(req.params.unique_id);
    if (transaction) {
        res.json(transaction);
    }
    else {
        res.status(404).send({ error: 'Transaction not found' });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
