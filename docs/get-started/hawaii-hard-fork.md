---
id: hawaii-hard-fork
title: Hawaii Hark Fork
---

Hawaii Hard Fork is coming!

It includes data and consensus migration, as well as many features enabled, including but not limited to snapshot syncing, storage optimization, stable synchronization protocol, etc.

It's more EVM compatible, and will no longer cause various strange EVM executing errors.

Your dAPP might not perfectly work on it due to different RPC and EVM behavior, so try to test your dAPP on Testnet (Upgrading) or Devnet (Already upgraded), please.

## Upgrade guide

* [Download the Dogechain V2 Snapshots](https://github.com/dogechain-lab/dogechain-snapshots) and unzip it.
  * The ancient snapshot zstd file is huge (**1TiB**), you'd better download it to an **at least 2TiB** driver.
  * Pruned snapshot need **46GiB**, you'd better download it to an **at least 200GiB** driver.
* Run your own [Full Node](./full-node-deployment) or [Archive Node](./run-archive-node) if you wish to.
  * "full" and "archive" `gcmode` behave exactly like `geth`.
  * The `genesis-before-hawaii.json` and `genesis-after-hawaii.json` are provided on [this section](./full-node-deployment#copy-genesisjson-to-etc-directory). You should switch `genesis.json` during `Hawaii Fork`.
  * Systemd-supervised service configuration is provided on [this section](./full-node-deployment#create-systemd-service), so as the bootnodes info. 
* We'll provide much leaper pruned `snapshot` file after `Hawaii Fork`.

## Impacts

**Important notes** for all the users and developers.

* Offline Signature SDK
  * Transaction needs to be signed with chain id.
  * You might need to adjust your priority fee to at least 250GWei to make sure it won't failed when calling method without visiting `eth_gasPrice`.

* RPC Interface
  * Much of it is the same as before and is compatible with the Ethereum RPC API.

* Transaction Fees
  * Berlin fork is enabled, so it should be a little cheaper to visit already acceessed storage.

* **Solidity Compatibility**
  * Use EVM version less than or equal to `london(0.8.17)`. If you use a higher version of EVM than this, contract deployment or execution may fail.

* **Metamask or Other Wallets**
  * You need to adjust your estimated gas price to at least 250GWei manually. Metamask wallet will calulate priority price offline, and give out too low price estimations.

![Alt text](/img/mm-setting-1.png)

![Alt text](/img/mm-setting-2.png)

![Alt text](/img/mm-setting-3.png)

## Contributions

Contact us by [GitHub issue](https://github.com/dogechain-lab/dbsc/issues) if you got any technical problem before and after the hard fork.
