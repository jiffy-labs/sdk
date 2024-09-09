import { Networks } from "../types";
import { Base, Config } from "../base";

export class SupportedNetworks extends Base {
  constructor(config: Config) {
    super(config);
  }

  getSupportedNetworks(): Promise<Networks> {
    return this.invoke(`getNetworks`);
  }
}
