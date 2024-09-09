import { Base, Config } from "../base";
import { createParams } from "../utils";

// TYPES
import {
  AccountDetail,
  AccountDetails,
  NetworkName,
  NFTTransafers,
  Pagination,
  TokenTransafers,
  Transactions,
} from "../types";

export class Account extends Base {
  constructor(config: Config) {
    super(config);
  }

  getAddressActivity({
    address,
    network,
    first,
    skip,
  }: {
    network: NetworkName;
    address: string;
  } & Pagination): Promise<AccountDetail> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getAddressActivity?${params.toString()}`);
  }

  getAddressBalances({
    address,
    network,
    first,
    skip,
  }: {
    network: NetworkName;
    address: string;
  } & Pagination): Promise<AccountDetail> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getAddressActivity?${params.toString()}`);
  }

  getAddressNFTTransfers({
    address,
    network,
    first,
    skip,
  }: {
    network: NetworkName;
    address: string;
  } & Pagination): Promise<NFTTransafers> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getAddressNFTTransfers?${params.toString()}`);
  }

  getAddressTransactions({
    address,
    network,
    first,
    skip,
  }: {
    network: NetworkName;
    address: string;
  } & Pagination): Promise<Transactions> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getAddressTransactions?${params.toString()}`);
  }

  getAddressERC20Transfers({
    address,
    network,
    first,
    skip,
  }: {
    network: NetworkName;
    address: string;
  } & Pagination): Promise<TokenTransafers> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getAddressERC20Transfers?${params.toString()}`);
  }

  getAddressAggregateData({
    address,
    network,
    first,
    skip,
  }: {
    network: NetworkName;
    address: string;
  } & Pagination): Promise<AccountDetails> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getAddressAggregateData?${params.toString()}`);
  }
}
