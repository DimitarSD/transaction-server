"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const data_json_1 = __importDefault(require("./data.json"));
// import transactions from "./datav2.json";
app.get("/api/transactions", (req, res) => {
    res.json(data_json_1.default["payment_transactions"]);
});
app.get("/api/transactions/:unique_id", (req, res) => {
    const transaction = data_json_1.default["payment_transactions"].find((t) => t.unique_id === req.params.unique_id);
    if (transaction) {
        res.json(transaction);
    }
    else {
        res.status(404).send({ error: "Transaction not found" });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
