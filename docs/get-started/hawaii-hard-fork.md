---
id: hawaii-hard-fork
title: Hawaii Hark Fork
---

Hawaii Hard Fork is coming!

It includes data and consensus migration, as well as many features enabled, including but not limited to snapshot syncing, storage optimization, stable synchronization protocol, etc.

It's more EVM compatible, and will no longer cause various strange EVM executing errors.

Your dAPP might not perfectly work on it due to different RPC and EVM behavior, so try to test your dAPP on Testnet (Upgrading) or Devnet (Already upgraded), please.

Here comes the upgrade guide:

* [Download the Dogechain V2 Snapshots](https://github.com/dogechain-lab/dogechain-snapshots) and unzip it.
  * The snapshot zstd file is huge (**1.8TiB**), you'd better download it to an **at least 5TiB** driver.
* Run your own [Full Node](./full-node-deployment) or [Archive Node](./run-archive-node) if you wish to.
  * "full" and "archive" `gcmode` behave exactly like `geth`.
  * `genesis.json` is provided on [this section](./full-node-deployment#copy-genesisjson-to-etc-directory). You should switch `genesis.json` during `Hawaii Fork`.
  * Systemd-supervised service configuration is provided on [this section](./full-node-deployment#create-systemd-service), so as the bootnodes info. 
* We'll provide new `genesis.json` and much leaper pruned `snapshot` file after `Hawaii Fork`.

Contact us by [GitHub issue](https://github.com/dogechain-lab/dbsc/issues) if you got any technical problem before and after the hard fork.
