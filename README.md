# Transaction API Server

## Requirements

- [Node.js](https://nodejs.org/) (version 14 or higher)

## Setup

1. **Clone the repo:**

   ```bash
   git clone https://github.com/DimitarSD/transaction-server.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Choose Transaction Data Version**

   The server uses an SDK to access transaction data. You can choose between two versions of the data by setting the argument passed to the `TransactionSDK` constructor (see `src/routes/routes.ts`):

   ```javascript
   const transactionSDK = new TransactionSDK("v2"); // Uses data-v2.json with more records and variety
   ```

   To switch to the original data with fewer records, change `"v2"` to `"v1"`:

   ```javascript
   const transactionSDK = new TransactionSDK("v1"); // Uses data.json with 5 records
   ```

   **Note**: If you switch between `v1` and `v2`, you need to restart the server for the changes to take effect.

4. After making your changes, **rebuild the project** to ensure the server uses the correct data source:

   ```bash
   npm run build
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:3001` by default.

## API Endpoints

- **GET `/api/transactions`**

  Returns a list of all payment transactions.

  Example:

  ```json
  [
    {
      "id": "1",
      "unique_id": "abc123",
      "status": "approved",
      "created_at": "2023-01-01T00:00:00Z",
      "merchant_name": "Test Merchant",
      "terminal_name": "Terminal 1",
      "type": "Sale",
      "error_class": "None",
      "card_holder": "John Doe",
      "card_number": "411111...1111",
      "amount": 100,
      "currency": "USD",
      "error_message": "None"
    }
  ]
  ```

- **GET `/api/transactions/:unique_id`**

  Returns a specific transaction by its unique ID.

  Example:

  ```json
  {
    "id": "1",
    "unique_id": "abc123",
    "status": "approved",
    "created_at": "2023-01-01T00:00:00Z",
    "merchant_name": "Test Merchant",
    "terminal_name": "Terminal 1",
    "type": "Sale",
    "error_class": "None",
    "card_holder": "John Doe",
    "card_number": "411111...1111",
    "amount": 100,
    "currency": "USD",
    "error_message": "None"
  }
  ```
