import { Account } from "./Account";
import { Base, Config } from "./base";
import { UserOperations } from "./UserOperations";
import { SupportedNetworks } from "./SupportedNetworks";
import { DailyMatrics } from "./Metrics";
import { Bundler } from "./Bundler";
import { Paymaster } from "./Paymaster";
import { Factory } from "./Factory/index";

class JiffyScan extends Base {
  public Networks: SupportedNetworks;
  public UserOp: UserOperations;
  public Account: Account;
  public DailyMatrics: DailyMatrics;
  public Bundler: Bundler;
  public Paymaster: Paymaster;
  public Factory: Factory;

  constructor(config: Config) {
    super(config);
    this.Networks = new SupportedNetworks(config);
    this.UserOp = new UserOperations(config);
    this.Bundler = new Bundler(config);
    this.Account = new Account(config);
    this.Paymaster = new Paymaster(config);
    this.Factory = new Factory(config);
    this.DailyMatrics = new DailyMatrics(config);
  }
}

export default JiffyScan;
