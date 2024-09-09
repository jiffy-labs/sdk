# JiffyScanClient SDK

The `JiffyScanClient SDK` provides a set of functions to interact with the JiffyScan API. This document describes the available functions and how to use them.

## Installation

To install the SDK, use npm or yarn:

```bash
npm install jiffyscan-sdk
```

or

```bash
yarn install jiffyscan-sdk
```

## Initialization

First, you need to initialize the `JiffyScanClient` with your API key and version:

```bash
import JiffyScan from 'jiffyscan-sdk';

const JiffyScanClient = new JiffyScan({
  apiKey: "your-api-key",
  version: "v0",
});
```

## Functions

Here is a list of the functions available in the `JiffyScanClient SDK`, along with usage examples

| Property                             | Definition                                                                      |
| ------------------------------------ | ------------------------------------------------------------------------------- |
| `Networks.getSupportedNetworks()`    | Retrieves a list of supported networks along with their chain IDs.              |
| `Account.getAddressActivity()`       | Get all 4337 User Operations for an address.                                    |
| `Account.getAddressBalances()`       | Returns a list of tokens balances that the address holds.                       |
| `Account.getAddressNFTTransfers()`   | Returns a list of erc721+erc1155 transfers that the address has made.           |
| `Account.getAddressTransactions()`   | Returns an array of internal + external transactions that the address has made. |
| `Account.getAddressERC20Transfers()` | Returns an array of erc20 transfers that the address has made.                  |
| `Account.getAddressAggregateData()`  | Returns an array of erc20 transfers that the address has made.                  |
| `Bundler.getLatestBundles()`         | Retrieves the latest bundles on the specified network.                          |
| `Bundler.getTopBundles()`            | Fetches the top bundles on the specified network.                               |
| `Bundler.getBundlerActivity()`       | Retrieves activity details for a specific bundler address.                      |
| `Factory.getTopFactories()`          | Returns an array of internal + external transactions that the address has made. |
| `Factory.getFactoryDetails()`        | Retrieves details for a specific factory contract address.                      |
| `Metrics.getDailyMetrics()`          | Fetches daily metrics for the specified network.                                |
| `Paymaster.getTopPaymasters()`       | Retrieves the top paymasters on the specified network.                          |
| `UserOp.getLatestUserOps()`          | Returns the latest user operations that were mined recently.                    |
| `UserOp.getPaymasterActivity()`      | Retrieves activity details for a specific paymaster address.                    |
| `UserOp.getUserOp()`                 | Fetches details of a specific user operation by hash.                           |
| `UserOp.getBundleActivity()`         | Retrieves activity details for a specific bundle hash.                          |
| `UserOp.getUserOpLogs()`             | Fetches logs for a specific user operation by hash.                             |
| `UserOp.getLogFromIndex()`           | Retrieves a log entry from a transaction by its index.                          |
| `UserOp.getBlockActivity()`          | Fetches activity details for a specific block number.                           |
| `UserOp.getUserOpMetadata()`         | Retrieves metadata for a specific user operation by hash.                       |

## Usage

Here is a list of the functions available in the `JiffyScanClient SDK`, along with usage examples

```bash
await JiffyScanClient.Account.getAddressAggregateData({
     address: "0x16c6078cce90Dd48316c74d71c8C4d67a98Eeb52",
     network: "polygon-amoy",
});
```
