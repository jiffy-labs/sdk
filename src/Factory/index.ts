import { createParams } from "../utils";
import { Base, Config } from "../base";

// TYPES
import { Factories, FactoryDetails, NetworkName, Pagination } from "../types";

export class Factory extends Base {
  constructor(config: Config) {
    super(config);
  }

  getTopFactories({
    network,
    first,
    skip,
  }: { network?: NetworkName } & Pagination): Promise<Factories> {
    const params = createParams({ network, first, skip });
    return this.invoke(`getTopFactories?${params.toString()}`);
  }

  getFactoryDetails({
    factory,
    network,
    first,
    skip,
  }: {
    factory: string;
    network?: NetworkName;
  } & Pagination): Promise<FactoryDetails> {
    const params = createParams({ factory, network, first, skip });
    return this.invoke(`getFactoryDetails?${params.toString()}`);
  }
}
