import { createParams } from "../utils";
import { Base, Config } from "../base";

// TYPES
import { Matrics, NetworkName } from "../types";

export class DailyMatrics extends Base {
  constructor(config: Config) {
    super(config);
  }

  getDailyMetrics({
    network,
    noOfDays,
  }: {
    network: NetworkName;
    noOfDays?: string;
  }): Promise<Matrics> {
    const params = createParams({ network, noOfDays });
    return this.invoke(`getDailyMetrics?${params.toString()}`);
  }
}
