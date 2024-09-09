import { createParams } from "../utils";
import { Base, Config } from "../base";

// TYPES
import { Bundles, BundlerDetails, NetworkName, Pagination } from "../types";

export class Bundler extends Base {
  constructor(config: Config) {
    super(config);
  }

  getLatestBundles({
    network,
    first,
    skip,
  }: { network: NetworkName } & Pagination): Promise<Bundles> {
    const params = createParams({ network, first, skip });
    return this.invoke(`getLatestBundles?${params.toString()}`);
  }

  getTopBundles({
    network,
    first,
    skip,
  }: { network: NetworkName } & Pagination): Promise<Bundles> {
    const params = createParams({ network, first, skip });
    return this.invoke(`getLatestBundles?${params.toString()}`);
  }

  getBundlerActivity({
    address,
    network,
    first,
    skip,
  }: {
    network: NetworkName;
    address: string;
  } & Pagination): Promise<BundlerDetails> {
    const params = createParams({ address, network, first, skip });
    return this.invoke(`getBundlerActivity?${params.toString()}`);
  }
}
