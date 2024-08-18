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

3. **Choose the Data Source:**

   This project includes two versions of `data.json` files:

   - `data.json` with 5 records: This is the original dataset provided in the project requirements.
   - `datav2.json` with 15 records: This is an extended version that adds 10 more records offering more variety and data.

   By default, the server uses `datav2.json`. If you want to switch to `data.json`, follow these steps:

   1. Open the `index.ts` file
   2. Comment or uncomment the appropriate lines:

   ```javascript
   import transactions from "./data.json";
   // import transactions from "./datav2.json"; // Default
   ```

   3. After making your changes, **rebuild the project** to ensure the server uses the correct data source:

   ```bash
   npm run build
   ```

   4. Start the server:

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
