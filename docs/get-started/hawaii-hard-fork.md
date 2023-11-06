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

* Offline signature sdk
  * Transaction needs to be signed with chain id.
  * You might need to adjust your priority fee to at least 250GWei to make sure it won't failed when calling method without visiting `eth_gasPrice`.

* RPC interface
  * Much of it is the same as before and is compatible with the Ethereum RPC API.

* Transaction fees
  * Berlin fork is enabled, so it should be a little cheaper to visit already acceessed storage.

## Contributions

Contact us by [GitHub issue](https://github.com/dogechain-lab/dbsc/issues) if you got any technical problem before and after the hard fork.
