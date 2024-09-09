import { createParams } from "../utils";
import { Base, Config } from "../base";

// TYPES
import { NetworkName, Pagination, Paymasters } from "../types";

export class Paymaster extends Base {
  constructor(config: Config) {
    super(config);
  }

  getTopPaymasters({
    network,
    first,
    skip,
  }: { network: NetworkName } & Pagination): Promise<Paymasters> {
    const params = createParams({ network, first, skip });
    return this.invoke(`getTopPaymasters?${params.toString()}`);
  }
}
