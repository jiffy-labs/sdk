export type NetworkName =
  | "mainnet"
  | "optimism"
  | "bsc"
  | "bnbTestnet"
  | "gnosis"
  | "fuse"
  | "matic"
  | "fantom"
  | "vanar-mainnet"
  | "fantom-testnet"
  | "cyber-mainnet"
  | "base"
  | "arbitrum-one"
  | "avalanche-fuji"
  | "avalanche"
  | "vanar-testnet"
  | "polygon-amoy"
  | "baseSepolia"
  | "arbitrum-sepolia"
  | "sepolia"
  | "optimism-sepolia";

export declare type Networks = {
  [key: string]: string;
};

export type Pagination = {
  first?: string;
  skip?: string;
};

// interface Account {

// }

export declare type AccountDetail = {
  accountDetail: any; // TODO
};

export declare type NFTTransafers = {
  erc721Transfers: any; // TODO
};

export declare type Transactions = {
  transactions: any; // TODO
};

export declare type TokenTransafers = {
  erc20Transfers: any; // TODO
};

export declare type AccountDetails = {
  accountDetail: {
    userOp: any;
  } & Transactions &
    TokenTransafers &
    NFTTransafers;
};

interface Matrix {
  activeWalletsDaily: string;
  bundleDaily: string;
  bundlerTotal: string;
  bundlesTotal: string;
  daySinceEpoch: string;
  factoryTotal: string;
  gasCostCollectedDaily: string;
  gasCostCollectedTotal: string;
  paymasterTotal: string;
  userOpsDaily: string;
  userOpsTotal: string;
  walletsCreatedDaily: string;
  walletsCreatedTotal: string;
}

export declare type Matrics = {
  matrics: Matrix[];
};

interface Paymaster {
  address: string;
  gasSponsored: string;
  userOpsLength: string;
}

export declare type Paymasters = {
  paymasters: Paymaster[];
};

export declare type GetLatestBundles = {
  network: NetworkName;
} & Pagination;

interface Bundle {
  blockNumber: string;
  blockTime: string;
  network: string;
  transactionHash: string;
  userOpsLength: string;
}

export declare type Bundles = { bundles: Bundle[] };
export declare type BundlerDetails = { bundlerDetails: any[] }; // TODO

interface Factory {
  accountsLength: string;
  address: string;
}

export declare type Factories = { factories: Factory[] };

interface Account {
  address: string;
  blockNumber: string;
  blockTime: string;
  userOpsCount: string;
}

export declare type FactoryDetails = {
  factoryDetails: {
    accountsLength: string;
    address: string;
    accounts: Account[];
  };
};

export declare type UserOp = {
  id: string;
  sender: string | null;
  target: string[];
  actualGasCost: string;
  success: boolean;
  revertReason: string | null;
  blockTime: number;
  paymaster: string;
  network: string;
  userOpHash: string;
  input: string;
  nonce: string;
  paymasterAndData: string;
  transactionHash: string;
  value: string[];
  callData: string[];
  preDecodedCallData: string;
  status: "SUCCESS" | "FAILED"; // TODO
  chainId: number;
  actualGasUsed: number;
  beneficiary: string;
  blockNumber: number;
  accountSender: any[];
  actualGasPrice: number;
  timeSeenInAltMempool: null;
  timeSeenInMainMempool: null;
  factory: null;
  accountTarget: any[];
  verificationGasLimit: string;
  preVerificationGas: string;
  maxFeePerGas: number | null;
  maxPriorityFeePerGas: number;
  signature: string;
  entryPoint: string;
  block: number;
};

export declare type UserOps = {
  userOps: {
    id: string;
    sender: string | null;
    target: string[];
    actualGasCost: string;
    success: boolean;
    revertReason: string | null;
    blockTime: number;
    paymaster: string;
    network: string;
    userOpHash: string;
    input: string;
    nonce: string;
    paymasterAndData: string;
    transactionHash: string;
    value: string[];
    callData: string[];
    preDecodedCallData: string;
    status: "SUCCESS" | "FAILED"; // TODO
    baseFeePerGas: string;
    actualGasUsed: number;
    beneficiary: string;
    blockNumber: number;
    callGasLimit: string | null;
    factory: string;
    gasLimit: string;
    gasPrice: string;
    maxFeePerGas: number | null;
    maxPriorityFeePerGas: number | null;
    preVerificationGas: string;
    signature: string;
    verificationGasLimit: null;
  }[];
};

export declare type PaymasterDetails = {
  paymasterDetail: {
    userOpsLength: string;
    address: string;
    id: string;
    userOps: {
      id: string;
      sender: string | null;
      target: string[];
      actualGasCost: string;
      success: boolean;
      revertReason: string | null;
      blockTime: number;
      paymaster: string;
      network: string;
      userOpHash: string;
      input: string;
      nonce: string;
      paymasterAndData: string;
      transactionHash: string;
      value: string[];
      callData: string[];
      preDecodedCallData: string;
      status: "SUCCESS" | "FAILED";
    }[];
  };
};

export declare type Log = {
  logIndex: string;
  transactionHash: string;
  transactionLogIndex: string;
  topics: string[];
  removed: true;
  data: string;
  address: string;
  event_name: string;
  eventName: string;
  topicsDecoded: {}[];
  dataDecoded: {}[];
};

export declare type UserOpLogs = {
  logs: Log[];
};

export declare type BundleDetails = {
  bundleDetails: {
    blockNumber: string;
    blockTime: number;
    from: string;
    network: string;
    status: string;
    to: string;
    transactionFee: string;
    transactionHash: string;
    userOpsLength: string;
    userOps: UserOp[];
  };
};

export declare type UserOpMetadata = {
  erc20Transfers: {
    invoked: string;
    from: string;
    to: string;
    value: string;
    name: string;
  }[];
  executionTrace: {
    traceData: {
      from: string;
      to: string;
      input: string;
      type: string;
      gas: string;
      gasUsed: string;
      output: string;
      method: string;
      decodedInput: {
        value: {
          target: string;
          value: string;
          data: string;
        }[];
        type: string;
        name: string;
        indexed: false;
      }[];
      executionCall: boolean;
    };
    next: [];
  };
  userOpParams: {}[];
  logs: {}[];
};
