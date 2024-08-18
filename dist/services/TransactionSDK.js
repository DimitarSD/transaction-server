"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSDK = void 0;
const data_json_1 = __importDefault(require("./../data/data.json"));
const data_v2_json_1 = __importDefault(require("./../data/data-v2.json"));
class TransactionSDK {
    constructor(version) {
        this.transactions =
            version === "v1"
                ? data_json_1.default.payment_transactions
                : data_v2_json_1.default.payment_transactions;
    }
    getAllTransactions() {
        return this.transactions;
    }
    getTransactionById(unique_id) {
        return (this.transactions.find((transaction) => transaction.unique_id === unique_id) || null);
    }
}
exports.TransactionSDK = TransactionSDK;
