import { Base, Config } from "../base";
import { createParams } from "../utils";

// TYPE
import {
  UserOps,
  PaymasterDetails,
  NetworkName,
  Pagination,
  UserOp,
  UserOpLogs,
  Log,
  BundleDetails,
  UserOpMetadata,
} from "../types";

export class UserOperations extends Base {
  constructor(config: Config) {
    super(config); // Pass the config to the Base class if needed
  }

  getLatestUserOps({
    network,
    first,
    skip,
  }: {
    network: NetworkName;
  } & Pagination): Promise<UserOps> {
    const params = createParams({ network, first, skip });
    return this.invoke(`getLatestUserOps?${params.toString()}`);
  }

  getPaymasterActivity({
    address,
    network,
    first,
    skip,
  }: {
    address: string;
    network?: string;
  } & Pagination): Promise<PaymasterDetails> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getPaymasterActivity?${params.toString()}`);
  }

  getUserOp({
    hash,
    network,
  }: {
    hash: string;
    network?: string;
  }): Promise<UserOp> {
    const params = createParams({ hash, network });
    return this.invoke(`getUserOp?${params.toString()}`);
  }

  getBundleActivity({
    bundle,
    network,
    first,
    skip,
  }: {
    bundle: string;
    network?: string;
  } & Pagination): Promise<BundleDetails> {
    const params = createParams({ bundle, network, first, skip });
    return this.invoke(`getBundleActivity?${params.toString()}`);
  }

  getUserOpLogs({
    userOpHash,
    network,
  }: {
    network?: NetworkName;
    userOpHash: string;
  }): Promise<UserOpLogs> {
    const params = createParams({ userOpHash, network });
    return this.invoke(`getUserOpLogs?${params.toString()}`);
  }

  getLogFromIndex({
    transactionHash,
    logIndec,
    network,
  }: {
    transactionHash: string;
    logIndec: number;
    network?: NetworkName;
  }): Promise<Log> {
    const params = createParams({
      transactionHash,
      logIndec: logIndec.toString(),
      network,
    });
    return this.invoke(`getLogFromIndex?${params.toString()}`);
  }

  getBlockActivity({
    address,
    network,
    first,
    skip,
  }: {
    address: string;
    network?: string;
    first?: string;
    skip?: string;
  }): Promise<any> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getBlockActivity?${params.toString()}`);
  }

  getUserOpMetadata({
    userOpHash,
    network,
  }: {
    network: "mainnet";
    userOpHash: string;
  }): Promise<UserOpMetadata> {
    const params = createParams({ userOpHash, network });
    return this.invoke(`getUserOpMetadata?${params.toString()}`);
  }
}
